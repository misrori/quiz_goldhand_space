import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { toast } from "sonner";
import VoteResults from "./VoteResults";
import { v4 as uuidv4 } from "uuid";

interface ParticipantViewProps {
  roomId: string;
  roomCode: string;
}

interface Question {
  id: string;
  question_text: string;
  options: string[];
  question_type: 'multiple_choice' | 'number_scale' | 'word_cloud';
  correct_answer?: string;
  explanation?: string;
  results_revealed?: boolean;
  timer_seconds?: number;
}

const ParticipantView = ({ roomId, roomCode }: ParticipantViewProps) => {
  const [question, setQuestion] = useState<Question | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [anonymousUserId, setAnonymousUserId] = useState<string>("");
  const [numberValue, setNumberValue] = useState<number>(5);
  const [words, setWords] = useState<string[]>(["", ""]);
  const [hasVoted, setHasVoted] = useState(false);
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  useEffect(() => {
    // Get or create anonymous user ID
    let userId = localStorage.getItem("anonymous_user_id");
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem("anonymous_user_id", userId);
    }
    setAnonymousUserId(userId);

    loadQuestion();
    subscribeToQuestionChanges();
    loadUserVote(userId);
    // Clear local vote state when room changes (new question started)
    setSelectedOption(null);
    setNumberValue(5);
    setWords(["", ""]);
    setHasVoted(false);
    setShowCorrectAnswer(false);
  }, [roomId]);

  // Countdown timer effect
  useEffect(() => {
    if (remainingTime === null || remainingTime <= 0) return;

    const interval = setInterval(() => {
      setRemainingTime((prev) => {
        if (prev === null || prev <= 1) {
          return null;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime]);

  const loadQuestion = async () => {
    try {
      const { data, error } = await supabase
        .from("questions")
        .select("*")
        .eq("room_id", roomId)
        .order("created_at", { ascending: false })
        .limit(1)
        .single();

      if (data && !error) {
        setQuestion({
          id: data.id,
          question_text: data.question_text,
          options: data.options as string[],
          question_type: data.question_type as 'multiple_choice' | 'number_scale' | 'word_cloud',
          correct_answer: data.correct_answer,
          explanation: data.explanation,
          results_revealed: data.results_revealed,
          timer_seconds: data.timer_seconds
        });

        // Start countdown if there's a timer and results aren't revealed yet
        if (data.timer_seconds && !data.results_revealed && data.correct_answer) {
          setRemainingTime(data.timer_seconds);
        }

        // Update showCorrectAnswer based on results_revealed
        if (data.results_revealed && data.correct_answer && selectedOption) {
          setShowCorrectAnswer(true);
        }
      }
    } catch (error) {
      console.log("No question available yet");
    }
  };

  const loadUserVote = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from("votes")
        .select("selected_option")
        .eq("room_id", roomId)
        .eq("anonymous_user_id", userId)
        .single();

      if (data && !error) {
        setSelectedOption(data.selected_option);
      }
    } catch (error) {
      // No vote yet
    }
  };

  const subscribeToQuestionChanges = () => {
    const channel = supabase
      .channel("question-changes")
      .on(
        "postgres_changes",
        {
          event: "*",
          schema: "public",
          table: "questions",
          filter: `room_id=eq.${roomId}`
        },
        (payload) => {
          if (payload.eventType === "INSERT") {
            setQuestion({
              id: payload.new.id,
              question_text: payload.new.question_text,
              options: payload.new.options as string[],
              question_type: payload.new.question_type,
              correct_answer: payload.new.correct_answer,
              explanation: payload.new.explanation,
              results_revealed: payload.new.results_revealed,
              timer_seconds: payload.new.timer_seconds
            });
            // Clear local vote state when a new question is inserted
            setSelectedOption(null);
            setNumberValue(5);
            setWords(["", ""]);
            setHasVoted(false);
            setShowCorrectAnswer(false);
            // Start countdown if there's a timer
            if (payload.new.timer_seconds && payload.new.correct_answer) {
              setRemainingTime(payload.new.timer_seconds);
            } else {
              setRemainingTime(null);
            }
          } else if (payload.eventType === "UPDATE") {
            // Update results_revealed status
            setQuestion(prev => prev ? {
              ...prev,
              results_revealed: payload.new.results_revealed
            } : null);
            // Show correct answer when results are revealed
            if (payload.new.results_revealed && payload.new.correct_answer && selectedOption) {
              setShowCorrectAnswer(true);
            }
            // Stop countdown when results are revealed
            if (payload.new.results_revealed) {
              setRemainingTime(null);
            }
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  };

  const vote = async (option: string) => {
    if (!anonymousUserId) {
      toast.error("Unable to vote. Please refresh the page.");
      return;
    }

    try {
      const { error } = await supabase
        .from("votes")
        .upsert({
          room_id: roomId,
          question_id: question.id,
          anonymous_user_id: anonymousUserId,
          selected_option: option
        }, {
          onConflict: "room_id,anonymous_user_id"
        });

      if (error) throw error;

      setSelectedOption(option);
      setHasVoted(true);
      toast.success("Vote recorded!");

      // Show correct answer feedback immediately for fact check questions
      if (question?.correct_answer) {
        setShowCorrectAnswer(true);
      }
    } catch (error) {
      console.error("Error voting:", error);
      toast.error("Failed to record vote");
    }
  };

  const submitNumberVote = async () => {
    if (!anonymousUserId) {
      toast.error("Unable to vote. Please refresh the page.");
      return;
    }

    try {
      const { error } = await supabase
        .from("votes")
        .upsert({
          room_id: roomId,
          question_id: question.id,
          anonymous_user_id: anonymousUserId,
          selected_option: numberValue.toString()
        }, {
          onConflict: "room_id,anonymous_user_id"
        });

      if (error) throw error;

      setHasVoted(true);
      toast.success("Vote recorded!");
    } catch (error) {
      console.error("Error voting:", error);
      toast.error("Failed to record vote");
    }
  };

  const submitWordVote = async () => {
    if (!anonymousUserId) {
      toast.error("Unable to vote. Please refresh the page.");
      return;
    }

    const filledWords = words.filter(w => w.trim());
    if (filledWords.length === 0) {
      toast.error("Please enter at least one word");
      return;
    }

    try {
      const { error } = await supabase
        .from("votes")
        .upsert({
          room_id: roomId,
          question_id: question.id,
          anonymous_user_id: anonymousUserId,
          selected_option: filledWords.join(",")
        }, {
          onConflict: "room_id,anonymous_user_id"
        });

      if (error) throw error;

      setHasVoted(true);
      toast.success("Words submitted!");
    } catch (error) {
      console.error("Error voting:", error);
      toast.error("Failed to submit words");
    }
  };

  const addWordInput = () => {
    setWords([...words, ""]);
  };

  if (!question) {
    return (
      <div className="container mx-auto p-4 max-w-4xl">
        <div className="text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Room: {roomCode}</h1>
          <p className="text-xl text-muted-foreground">
            Waiting for the admin to post a question...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl space-y-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-muted-foreground">Room: {roomCode}</h1>
      </div>

      <Card className="border-2">
        <CardHeader>
          <CardTitle className="text-2xl">{question.question_text}</CardTitle>
          {remainingTime !== null && remainingTime > 0 && question.correct_answer && (
            <div className="mt-4 p-3 bg-primary/10 rounded-lg border border-primary/20">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Time Remaining:</span>
                <span className="text-2xl font-bold text-primary">{remainingTime}s</span>
              </div>
            </div>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {question.question_type === 'multiple_choice' && (
            <div className="space-y-3">
              {question.options.map((option, index) => (
                <Button
                  key={index}
                  onClick={() => vote(option)}
                  variant={selectedOption === option ? "default" : "outline"}
                  className="w-full justify-start text-left h-auto py-4 px-6"
                  size="lg"
                  disabled={hasVoted}
                >
                  <span className="font-semibold mr-3">
                    {String.fromCharCode(65 + index)}.
                  </span>
                  {option}
                </Button>
              ))}

              {showCorrectAnswer && question.correct_answer && (
                <div className={`p-4 rounded-lg ${selectedOption === question.correct_answer
                  ? 'bg-green-500/10 border border-green-500/20'
                  : 'bg-orange-500/10 border border-orange-500/20'
                  }`}>
                  <p className="font-semibold mb-2">
                    {selectedOption === question.correct_answer ? '✓ Correct!' : '✗ Incorrect'}
                  </p>
                  <p className="text-sm mb-2">
                    The correct answer is: <span className="font-semibold">{question.correct_answer}</span>
                  </p>
                  {question.explanation && (
                    <p className="text-sm text-muted-foreground mt-2">
                      {question.explanation}
                    </p>
                  )}
                </div>
              )}
            </div>
          )}

          {question.question_type === 'number_scale' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-sm font-medium text-muted-foreground">
                <span>Strongly Disagree</span>
                <span>Strongly Agree</span>
              </div>
              <Slider
                min={0}
                max={10}
                step={1}
                value={[numberValue]}
                onValueChange={(value) => setNumberValue(value[0])}
                disabled={hasVoted}
                className="w-full"
              />
              <div className="text-center">
                <span className="text-5xl font-bold text-primary">{numberValue}</span>
              </div>
              <Button
                onClick={submitNumberVote}
                disabled={hasVoted}
                className="w-full"
                size="lg"
              >
                {hasVoted ? "Vote Submitted" : "Submit Vote"}
              </Button>
            </div>
          )}

          {question.question_type === 'word_cloud' && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">Enter your words:</p>
              {words.map((word, index) => (
                <Input
                  key={index}
                  placeholder={`Word ${index + 1}`}
                  value={word}
                  onChange={(e) => {
                    const newWords = [...words];
                    newWords[index] = e.target.value;
                    setWords(newWords);
                  }}
                  disabled={hasVoted}
                />
              ))}
              {!hasVoted && (
                <Button
                  onClick={addWordInput}
                  variant="outline"
                  className="w-full"
                  size="lg"
                >
                  Add More Words
                </Button>
              )}
              <Button
                onClick={submitWordVote}
                disabled={hasVoted}
                className="w-full"
                size="lg"
              >
                {hasVoted ? "Words Submitted" : "Submit Words"}
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {(!question.correct_answer || question.results_revealed) && (
        <Card>
          <CardHeader>
            <CardTitle>Live Results</CardTitle>
          </CardHeader>
          <CardContent>
            <VoteResults
              roomId={roomId}
              questionId={question.id}
              questionType={question.question_type}
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ParticipantView;

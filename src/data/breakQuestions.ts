import { PredefinedQuestion } from "./predefinedQuestions";

export const breakQuestions: PredefinedQuestion[] = [
  {
    id: "break_1",
    question_text: "Are you ready to continue?",
    question_type: "multiple_choice",
    options: ["Yes, let's go!", "Almost there", "Need a bit more time", "Not yet"]
  },
  {
    id: "break_2",
    question_text: "How are you feeling after the break?",
    question_type: "multiple_choice",
    options: ["Energized!", "Good", "Neutral", "Still tired"]
  },
  {
    id: "break_3",
    question_text: "Rate your readiness to continue (0 = not ready, 10 = fully ready)",
    question_type: "number_scale",
    options: []
  },
  {
    id: "break_4",
    question_text: "Can we start the next session?",
    question_type: "multiple_choice",
    options: ["Yes!", "Give me 2 minutes", "Give me 5 minutes", "Not ready"]
  },
  {
    id: "break_5",
    question_text: "How would you describe your current state? (Type 3 words)",
    question_type: "word_cloud",
    options: []
  },
  {
    id: "break_6",
    question_text: "Did you enjoy the break?",
    question_type: "multiple_choice",
    options: ["Very much", "Yes", "It was okay", "Not really"]
  },
  {
    id: "break_7",
    question_text: "Rate how refreshed you feel (0 = exhausted, 10 = completely refreshed)",
    question_type: "number_scale",
    options: []
  }
];
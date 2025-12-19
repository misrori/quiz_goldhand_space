import { PredefinedQuestion } from "./predefinedQuestions";

export const funExtraQuestions: PredefinedQuestion[] = [
  {
    id: "fun_9",
    question_text: "What's your favorite season?",
    question_type: "multiple_choice",
    options: ["Spring", "Summer", "Fall", "Winter"]
  },
  {
    id: "fun_10",
    question_text: "Describe your mood right now in 3 words",
    question_type: "word_cloud",
    options: []
  },
  {
    id: "fun_11",
    question_text: "Dogs or cats?",
    question_type: "multiple_choice",
    options: ["Dogs!", "Cats!", "Both!", "Neither"]
  },
  {
    id: "fun_12",
    question_text: "What's your favorite movie genre?",
    question_type: "multiple_choice",
    options: ["Action", "Comedy", "Drama", "Sci-Fi"]
  }
];
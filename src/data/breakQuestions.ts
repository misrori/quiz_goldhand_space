import { PredefinedQuestion } from "./predefinedQuestions";

export const breakQuestions: PredefinedQuestion[] = [
  {
    id: "break_1",
    question_text: "Are you ready to jump back in?",
    question_type: "multiple_choice",
    options: ["Born ready!", "Give me 1 more minute", "Still chewing my snack", "Wait, we had a break?"]
  },
  {
    id: "break_2",
    question_text: "How was your break?",
    question_type: "word_cloud",
    options: []
  },
  {
    id: "break_3",
    question_text: "On a scale of 0-10, how caffeinated are you right now?",
    question_type: "number_scale",
    options: []
  },
  {
    id: "break_4",
    question_text: "What did you do during the break?",
    question_type: "multiple_choice",
    options: ["Stretched/Walked", "Checked emails (booo)", "Grabbed food/drink", "Stared into the void"]
  }
];
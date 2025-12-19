import { PredefinedQuestion } from "./predefinedQuestions";

export const funFactsQuestions: PredefinedQuestion[] = [
  {
    id: "fun_1",
    question_text: "What's your favorite pizza topping?",
    question_type: "multiple_choice",
    options: ["Pepperoni", "Mushrooms", "Pineapple (yes!)", "Cheese only"]
  },
  {
    id: "fun_2",
    question_text: "If you could have any superpower, what would it be?",
    question_type: "multiple_choice",
    options: ["Flying", "Invisibility", "Time travel", "Super strength"]
  },
  {
    id: "fun_3",
    question_text: "Coffee or tea?",
    question_type: "multiple_choice",
    options: ["Coffee all the way", "Tea please", "Both!", "Neither"]
  },
  {
    id: "fun_4",
    question_text: "How much do you like cats? (0 = not at all, 10 = crazy cat person)",
    question_type: "number_scale",
    options: []
  }
];
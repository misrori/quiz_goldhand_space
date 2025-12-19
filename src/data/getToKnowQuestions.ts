import { PredefinedQuestion } from "./predefinedQuestions";

export const getToKnowQuestions: PredefinedQuestion[] = [
  {
    id: "gk_1",
    question_text: "Where are you joining from?",
    question_type: "word_cloud",
    options: []
  },
  {
    id: "gk_2",
    question_text: "What is your current job title?",
    question_type: "word_cloud",
    options: []
  },
  {
    id: "gk_3",
    question_text: "Which field do you work in?",
    question_type: "multiple_choice",
    options: ["Data Analyst", "Data Scientist", "Data Engineer", "ML Engineer", "BI Developer", "Software Engineer", "Student", "Other"]
  },
  {
    id: "gk_4",
    question_text: "How many Databricks courses have you attended before?",
    question_type: "multiple_choice",
    options: ["None", "1-2", "3-5", "More than 5"]
  },
  {
    id: "gk_5",
    question_text: "Why are you here today?",
    question_type: "multiple_choice",
    options: ["My company sent me", "I joined by personal interest", "I want to reskill", "I’m exploring new opportunities", "Other"]
  },
  {
    id: "gk_6",
    question_text: "What are your expectations for this course?",
    question_type: "word_cloud",
    options: []
  },
  {
    id: "gk_7",
    question_text: "How familiar are you with cloud platforms? (e.g., AWS, Azure, GCP)",
    question_type: "multiple_choice",
    options: ["Not familiar", "Somewhat familiar", "Very familiar"]
  },
  {
    id: "gk_8",
    question_text: "Which industry do you work in?",
    question_type: "multiple_choice",
    options: ["Finance", "Telco", "Healthcare", "Manufacturing", "Other"]
  },
  {
    id: "gk_9",
    question_text: "Have you previously worked with big data tools?",
    question_type: "multiple_choice",
    options: ["Yes", "No"]
  }
];
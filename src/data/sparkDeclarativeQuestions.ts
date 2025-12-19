import { PredefinedQuestion } from "./predefinedQuestions";

export const sparkDeclarativeQuestions: PredefinedQuestion[] = [
  {
    id: "sparkdecl_1",
    question_text: "What is a Spark declarative pipeline?",
    question_type: "multiple_choice",
    options: [
      "A pipeline defined by explicit step-by-step instructions",
      "A pipeline defined by describing desired outcomes and transformations",
      "A pipeline that only uses SQL",
      "A pipeline for streaming data only"
    ],
    correct_answer: "A pipeline defined by describing desired outcomes and transformations",
    explanation: "Declarative pipelines focus on what should be done, not how, allowing Spark to optimize execution."
  },
  {
    id: "sparkdecl_2",
    question_text: "Which language(s) can be used to define Spark declarative pipelines in Databricks?",
    question_type: "multiple_choice",
    options: [
      "Only Python",
      "Only SQL",
      "Python, SQL, and Scala",
      "Only Scala"
    ],
    correct_answer: "Python, SQL, and Scala",
    explanation: "Spark supports declarative pipeline definitions in Python, SQL, and Scala."
  },
  {
    id: "sparkdecl_3",
    question_text: "What is the main benefit of using declarative pipelines over imperative ones?",
    question_type: "multiple_choice",
    options: [
      "More control over execution details",
      "Easier optimization and maintenance",
      "Requires more code",
      "Only works for batch jobs"
    ],
    correct_answer: "Easier optimization and maintenance",
    explanation: "Declarative pipelines allow Spark to optimize execution plans and simplify code maintenance."
  },
  {
    id: "sparkdecl_4",
    question_text: "Which Spark component is most associated with declarative pipeline development?",
    question_type: "multiple_choice",
    options: [
      "RDDs",
      "DataFrames and SQL",
      "MLlib",
      "GraphX"
    ],
    correct_answer: "DataFrames and SQL",
    explanation: "DataFrames and SQL APIs are designed for declarative data processing."
  },
  {
    id: "sparkdecl_5",
    question_text: "What is a transformation in a Spark declarative pipeline?",
    question_type: "multiple_choice",
    options: [
      "An operation that triggers computation",
      "An operation that defines how data is changed",
      "An operation that saves data to disk",
      "An operation that creates a cluster"
    ],
    correct_answer: "An operation that defines how data is changed",
    explanation: "Transformations describe how data should be processed, but do not trigger execution."
  },
  {
    id: "sparkdecl_6",
    question_text: "How does Spark optimize declarative pipelines?",
    question_type: "multiple_choice",
    options: [
      "By running all steps in sequence",
      "By using the Catalyst optimizer to generate efficient execution plans",
      "By skipping transformations",
      "By using only one node"
    ],
    correct_answer: "By using the Catalyst optimizer to generate efficient execution plans",
    explanation: "The Catalyst optimizer analyzes and optimizes declarative queries for performance."
  },
  {
    id: "sparkdecl_7",
    question_text: "What is a common action in Spark pipelines?",
    question_type: "multiple_choice",
    options: [
      "map()",
      "filter()",
      "collect()",
      "select()"
    ],
    correct_answer: "collect()",
    explanation: "Actions like collect() trigger the execution of the pipeline and return results."
  },
  {
    id: "sparkdecl_8",
    question_text: "Which of the following is true about lazy evaluation in Spark declarative pipelines?",
    question_type: "multiple_choice",
    options: [
      "Transformations are executed immediately",
      "Actions are executed immediately",
      "Transformations are only executed when an action is called",
      "All operations are executed at once"
    ],
    correct_answer: "Transformations are only executed when an action is called",
    explanation: "Spark builds a logical plan and only executes it when an action is triggered."
  },
  {
    id: "sparkdecl_9",
    question_text: "What is the role of schema enforcement in Spark declarative pipelines?",
    question_type: "multiple_choice",
    options: [
      "It slows down processing",
      "It ensures data consistency and quality",
      "It is only used for streaming data",
      "It is optional for all pipelines"
    ],
    correct_answer: "It ensures data consistency and quality",
    explanation: "Schema enforcement helps maintain data integrity throughout the pipeline."
  },
  {
    id: "sparkdecl_10",
    question_text: "Which Databricks feature helps visualize and monitor Spark declarative pipelines?",
    question_type: "multiple_choice",
    options: [
      "Unity Catalog",
      "Jobs UI",
      "MLflow",
      "Delta Lake"
    ],
    correct_answer: "Jobs UI",
    explanation: "The Jobs UI provides visualization, monitoring, and management for pipeline runs."
  }
];
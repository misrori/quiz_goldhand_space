import { PredefinedQuestion } from "./predefinedQuestions";

export const generalDatabricksQuestions: PredefinedQuestion[] = [
    {
        id: "db_basic_1",
        question_text: "In what year was Databricks founded?",
        question_type: "multiple_choice",
        options: ["2010", "2013", "2015", "2020"],
        correct_answer: "2013",
        explanation: "Databricks was founded in 2013 by the creators of Apache Spark."
    },
    {
        id: "db_basic_2",
        question_text: "Who are the original creators of Apache Spark?",
        question_type: "multiple_choice",
        options: ["Google Engineers", "The AMPLab at UC Berkeley", "Facebook Data Team", "The Apache Software Foundation (from scratch)"],
        correct_answer: "The AMPLab at UC Berkeley",
        explanation: "Spark started as a research project at the AMPLab at UC Berkeley in 2009."
    },
    {
        id: "db_basic_3",
        question_text: "What is the core data structure in Apache Spark?",
        question_type: "multiple_choice",
        options: ["DataFrame", "RDD (Resilient Distributed Dataset)", "Dataset", "Table"],
        correct_answer: "RDD (Resilient Distributed Dataset)",
        explanation: "RDD is the fundamental immutable data structure of Spark, though DataFrames are more commonly used today."
    },
    {
        id: "db_basic_4",
        question_text: "Which of these is NOT a core component of the Databricks Lakehouse Platform?",
        question_type: "multiple_choice",
        options: ["Delta Lake", "Unity Catalog", "Microsoft Excel", "Photon Engine"],
        correct_answer: "Microsoft Excel",
        explanation: "Excel is a spreadsheet tool, not a component of the Databricks platform (though you can connect them!)."
    },
    {
        id: "db_basic_5",
        question_text: "Roughly how many employees does Databricks have globaly (as of 2024)?",
        question_type: "multiple_choice",
        options: ["< 1,000", "~ 6,000+", "> 50,000", "Just Ali Ghodsi"],
        correct_answer: "~ 6,000+",
        explanation: "Databricks has grown significantly to over 6,000 employees worldwide."
    }
];

import { PredefinedQuestion } from "./predefinedQuestions";

export const devopsQuestions: PredefinedQuestion[] = [
  {
    id: "devops_1",
    question_text: "What is the main goal of DevOps in data engineering?",
    question_type: "multiple_choice",
    options: [
      "Increase manual deployments",
      "Automate and streamline development, testing, and deployment",
      "Reduce collaboration between teams",
      "Focus only on infrastructure"
    ],
    correct_answer: "Automate and streamline development, testing, and deployment",
    explanation: "DevOps aims to automate and integrate processes for faster, more reliable delivery."
  },
  {
    id: "devops_2",
    question_text: "Which tool is commonly used for version control in Databricks projects?",
    question_type: "multiple_choice",
    options: [
      "Jenkins",
      "Git",
      "Docker",
      "Terraform"
    ],
    correct_answer: "Git",
  },
  {
    id: "devops_3",
    question_text: "What is CI/CD?",
    question_type: "multiple_choice",
    options: [
      "Continuous Integration and Continuous Deployment",
      "Cluster Initialization and Configuration Deployment",
      "Code Inspection and Continuous Debugging",
      "Cloud Infrastructure and Container Development"
    ],
    correct_answer: "Continuous Integration and Continuous Deployment",
    explanation: "CI/CD automates code integration, testing, and deployment to production."
  },
  {
    id: "devops_4",
    question_text: "Which Databricks feature supports automated job deployment?",
    question_type: "multiple_choice",
    options: [
      "Databricks Jobs API",
      "Databricks Notebooks",
      "Databricks MLflow",
      "Databricks Delta Lake"
    ],
    correct_answer: "Databricks Jobs API",
    explanation: "The Jobs API allows programmatic creation, management, and automation of jobs."
  },
  {
    id: "devops_5",
    question_text: "What is Infrastructure as Code (IaC)?",
    question_type: "multiple_choice",
    options: [
      "Writing code for data pipelines",
      "Managing infrastructure using configuration files and code",
      "Manual server provisioning",
      "Only used for networking"
    ],
    correct_answer: "Managing infrastructure using configuration files and code",
    explanation: "IaC enables automated, repeatable infrastructure setup using tools like Terraform."
  },
  {
    id: "devops_6",
    question_text: "Which tool is commonly used for IaC in Databricks environments?",
    question_type: "multiple_choice",
    options: [
      "Jenkins",
      "Terraform",
      "Airflow",
      "MLflow"
    ],
    correct_answer: "Terraform",
    explanation: "Terraform is widely used to manage Databricks workspaces, clusters, and resources as code."
  },
  {
    id: "devops_7",
    question_text: "What is the benefit of using automated testing in Databricks workflows?",
    question_type: "multiple_choice",
    options: [
      "Increases manual errors",
      "Ensures code quality and reliability before deployment",
      "Slows down development",
      "Only works for ML models"
    ],
    correct_answer: "Ensures code quality and reliability before deployment",
    explanation: "Automated tests catch issues early and improve code quality."
  },
  {
    id: "devops_8",
    question_text: "How can secrets and credentials be securely managed in Databricks?",
    question_type: "multiple_choice",
    options: [
      "Store in plain text files",
      "Use Databricks Secrets API",
      "Email credentials to team members",
      "Hard-code in notebooks"
    ],
    correct_answer: "Use Databricks Secrets API",
    explanation: "The Secrets API securely stores and retrieves sensitive information."
  },
  {
    id: "devops_9",
    question_text: "What is the purpose of monitoring and logging in DevOps for Databricks?",
    question_type: "multiple_choice",
    options: [
      "To ignore errors",
      "To track system health, performance, and troubleshoot issues",
      "To slow down jobs",
      "To increase costs"
    ],
    correct_answer: "To track system health, performance, and troubleshoot issues",
    explanation: "Monitoring and logging are essential for maintaining reliable data pipelines."
  },
  {
    id: "devops_10",
    question_text: "Which practice helps ensure reproducibility and consistency in Databricks deployments?",
    question_type: "multiple_choice",
    options: [
      "Manual configuration",
      "Infrastructure as Code and version control",
      "Ad-hoc scripting",
      "Ignoring environment differences"
    ],
    correct_answer: "Infrastructure as Code and version control",
    explanation: "IaC and version control ensure deployments are consistent and reproducible."
  }
];
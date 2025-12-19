import { PredefinedQuestion } from "./predefinedQuestions";

export const lakeflowJobsQuestions: PredefinedQuestion[] = [
  {
    id: "lakejob_1",
    question_text: "What is the main purpose of a Lakeflow Job in Databricks?",
    question_type: "multiple_choice",
    options: [
      "Storing raw data in Unity Catalog",
      "Orchestrating and automating end-to-end data and AI workflows",
      "Managing user permissions and access control",
      "Replacing all notebooks with SQL-only pipelines"
    ],
    correct_answer: "Orchestrating and automating end-to-end data and AI workflows",
    explanation: "A Lakeflow Job coordinates multiple tasks (notebooks, SQL, scripts, pipelines) and runs them in the right order on a schedule or trigger to implement full pipelines."
  },
  {
    id: "lakejob_2",
    question_text: "In a Lakeflow Job, what is a task?",
    question_type: "multiple_choice",
    options: [
      "A full application deployed on a cluster",
      "A single step in the workflow, such as running a notebook or SQL query",
      "A separate Databricks workspace",
      "A Delta table with metadata"
    ],
    correct_answer: "A single step in the workflow, such as running a notebook or SQL query",
    explanation: "Tasks represent individual units of work inside a job, for example ingest, transform, validate, or publish, and are connected to form the job’s DAG."
  },
  {
    id: "lakejob_3",
    question_text: "Which compute type is best suited for ad-hoc analysis and development, not for cost-efficient production jobs?",
    question_type: "multiple_choice",
    options: [
      "Job clusters",
      "Serverless",
      "Interactive (all-purpose) clusters",
      "SQL Warehouse"
    ],
    correct_answer: "Interactive (all-purpose) clusters",
    explanation: "Interactive clusters are shared and ideal for exploration and development, but keeping them running continuously is usually not cost-efficient for production workloads."
  },
  {
    id: "lakejob_4",
    question_text: "Why are job clusters often preferred over interactive clusters for production Lakeflow Jobs?",
    question_type: "multiple_choice",
    options: [
      "They support only SQL workloads",
      "They automatically terminate when the job finishes",
      "They cannot scale automatically",
      "They are required for Unity Catalog access"
    ],
    correct_answer: "They automatically terminate when the job finishes",
    explanation: "Job clusters are created for a specific run and shut down afterwards, which reduces idle time and typically lowers compute cost for production pipelines."
  },
  {
    id: "lakejob_5",
    question_text: "What is a key benefit of using serverless compute for Lakeflow Jobs?",
    question_type: "multiple_choice",
    options: [
      "Manual cluster sizing and capacity planning",
      "No support for autoscaling",
      "Fully managed infrastructure with faster startup and lower operational overhead",
      "It disables monitoring to save costs"
    ],
    correct_answer: "Fully managed infrastructure with faster startup and lower operational overhead",
    explanation: "Serverless lets Databricks manage the infrastructure, providing quick startup, autoscaling, and simplified operations, which can reduce total cost of ownership."
  },
  {
    id: "lakejob_6",
    question_text: "What is a key characteristic of SQL Warehouse as a compute option in Databricks?",
    question_type: "multiple_choice",
    options: [
      "It only runs Python code",
      "It is optimized for high-concurrency SQL and BI workloads",
      "It cannot be used by Lakeflow Jobs",
      "It does not support autoscaling"
    ],
    correct_answer: "It is optimized for high-concurrency SQL and BI workloads",
    explanation: "SQL Warehouses are purpose-built for SQL queries, dashboards, and BI, offering concurrency, autoscaling, and features like intelligent workload management."
  },
  {
    id: "lakejob_7",
    question_text: "What is the main difference between a schedule and a trigger in Lakeflow Jobs?",
    question_type: "multiple_choice",
    options: [
      "Schedules are manual; triggers are automatic",
      "Schedules are time-based; triggers can be time- or event-based",
      "Schedules only apply to development jobs",
      "Triggers can only be used with SQL tasks"
    ],
    correct_answer: "Schedules are time-based; triggers can be time- or event-based",
    explanation: "Schedules run jobs at specific times, while triggers can fire based on time or data events, such as table updates or new files."
  },
  {
    id: "lakejob_8",
    question_text: "Which scenario is best suited for a table-update trigger in Lakeflow Jobs?",
    question_type: "multiple_choice",
    options: [
      "Running a job every Monday at 8 AM",
      "Running a job whenever any cluster becomes idle",
      "Running a job as soon as upstream Delta tables receive new data",
      "Running a job when a user opens a notebook"
    ],
    correct_answer: "Running a job as soon as upstream Delta tables receive new data",
    explanation: "Table-update triggers fire when Unity Catalog tables change, ideal for reactive pipelines that must process data immediately after it lands."
  },
  {
    id: "lakejob_9",
    question_text: "Which configuration option helps make a Lakeflow Job more resilient to transient failures?",
    question_type: "multiple_choice",
    options: [
      "Using only interactive clusters",
      "Setting retries and retry intervals on tasks",
      "Disabling all error handling",
      "Removing dependencies between tasks"
    ],
    correct_answer: "Setting retries and retry intervals on tasks",
    explanation: "Configuring retries and delays allows tasks to recover from temporary issues such as brief network or service interruptions."
  },
  {
    id: "lakejob_10",
    question_text: "In a Lakeflow Job, how are dependencies between tasks typically represented and managed?",
    question_type: "multiple_choice",
    options: [
      "As SQL foreign-key constraints",
      "As a directed acyclic graph (DAG) showing which tasks run after others",
      "As a single linear execution list with no branching",
      "As cluster tags in the workspace"
    ],
    correct_answer: "As a directed acyclic graph (DAG) showing which tasks run after others",
    explanation: "Lakeflow Jobs visualize task dependencies as a DAG, letting you define branches, order, and conditions that control how the workflow executes."
  }
];
import { PredefinedQuestion } from "./predefinedQuestions";

export const lakeflowConnectQuestions: PredefinedQuestion[] = [
  {
    id: "lakeflow_1",
    question_text: "What is the primary purpose of Lakeflow Connect in Databricks?",
    question_type: "multiple_choice",
    options: [
      "Manage cluster compute profiles",
      "Simplify and accelerate data ingestion from various sources",
      "Generate dashboards automatically",
      "Replace Delta Live Tables"
    ],
    correct_answer: "Simplify and accelerate data ingestion from various sources",
    explanation: "Lakeflow Connect provides managed pipelines that connect to many data sources, handle authentication, schema drift, and ingestion logic while hiding infrastructure complexity."
  },
  {
    id: "lakeflow_2",
    question_text: "What are the two main categories of connectors in Lakeflow Connect?",
    question_type: "multiple_choice",
    options: [
      "Manual connectors and Automated connectors",
      "Streaming connectors and Batch connectors",
      "Standard connectors and Managed connectors",
      "Bronze connectors and Silver connectors"
    ],
    correct_answer: "Standard connectors and Managed connectors",
    explanation: "Standard connectors read from cloud file storage (S3, ADLS, GCS). Managed connectors integrate with enterprise systems (Salesforce, Oracle, SAP, SaaS) using fully managed, zero-code ingestion."
  },
  {
    id: "lakeflow_3",
    question_text: "Which three ingestion methods are common in Lakeflow Connect Standard Connectors?",
    question_type: "multiple_choice",
    options: [
      "MERGE INTO, DLT, COPY INTO",
      "CTAS, COPY INTO, Auto Loader",
      "Spark Streaming, DLT, Snowpipe",
      "Unity Catalog, MLflow, Auto Loader"
    ],
    correct_answer: "CTAS, COPY INTO, Auto Loader",
    explanation: "These are the three fundamental ingestion techniques used for initial loads (CTAS), incremental batch loads (COPY INTO), and continuous streaming ingestion (Auto Loader)."
  },
  {
    id: "lakeflow_4",
    question_text: "What is the primary goal of the Medallion Architecture?",
    question_type: "multiple_choice",
    options: [
      "Reduce cluster usage",
      "Organize data into structured quality layers",
      "Optimize SQL query cost",
      "Replace data warehouses"
    ],
    correct_answer: "Organize data into structured quality layers",
    explanation: "The Bronze → Silver → Gold layering improves quality, reliability, lineage, and reusability across analytics and ML workloads."
  },
  {
    id: "lakeflow_5",
    question_text: "What is the purpose of metadata columns added during ingestion?",
    question_type: "multiple_choice",
    options: [
      "Improve write throughput",
      "Track ingestion time and file lineage",
      "Reduce storage cost",
      "Partition the data automatically"
    ],
    correct_answer: "Track ingestion time and file lineage",
    explanation: "Metadata such as _ingestion_timestamp and _source_file enables auditing, troubleshooting, and governance across ingestion pipelines."
  },
  {
    id: "lakeflow_6",
    question_text: "What is the rescued data column used for?",
    question_type: "multiple_choice",
    options: [
      "Storing deleted records",
      "Capturing malformed or schema-mismatched records",
      "Tracking cluster crash logs",
      "Holding checkpoint data"
    ],
    correct_answer: "Capturing malformed or schema-mismatched records",
    explanation: "When a record doesn’t fit the schema, it is stored in the _rescued_data column rather than being dropped, preserving data integrity and supporting schema evolution."
  },
  {
    id: "lakeflow_7",
    question_text: "How does Auto Loader differ from COPY INTO?",
    question_type: "multiple_choice",
    options: [
      "Auto Loader is only for batch workloads",
      "COPY INTO supports schema evolution",
      "Auto Loader supports continuous ingestion with automatic file discovery",
      "COPY INTO uses serverless compute only"
    ],
    correct_answer: "Auto Loader supports continuous ingestion with automatic file discovery",
    explanation: "Auto Loader scales to millions of files, handles schema drift automatically, and is ideal for streaming or continuous ingestion. COPY INTO is best for incremental batch ingestion."
  },
  {
    id: "lakeflow_8",
    question_text: "What is a major benefit of using Managed Connectors for enterprise ingestion?",
    question_type: "multiple_choice",
    options: [
      "They eliminate the need for Unity Catalog",
      "They provide zero-code connection to systems like SAP, Salesforce, Oracle",
      "They run only on classic compute",
      "They bypass security controls for faster performance"
    ],
    correct_answer: "They provide zero-code connection to systems like SAP, Salesforce, Oracle",
    explanation: "Managed Connectors provide built-in reliability, schema management, error handling, credential management, and external system integration with no coding required."
  },
  {
    id: "lakeflow_9",
    question_text: "When should you use the Delta Lake MERGE INTO command?",
    question_type: "multiple_choice",
    options: [
      "When performing streaming ingestion from cloud storage",
      "When needing to synchronize or upsert data",
      "For schema evolution",
      "For bulk initial table creation"
    ],
    correct_answer: "When needing to synchronize or upsert data",
    explanation: "MERGE INTO is used for change data capture (CDC), Slowly Changing Dimensions (SCD), and upserting new or updated records into Delta tables."
  },
  {
    id: "lakeflow_10",
    question_text: "What is the Databricks Marketplace used for?",
    question_type: "multiple_choice",
    options: [
      "Deploying clusters and jobs",
      "Sharing notebooks with other users",
      "Subscribing to external datasets and applications",
      "Running ML models directly on partner platforms"
    ],
    correct_answer: "Subscribing to external datasets and applications",
    explanation: "The Marketplace provides third-party and open datasets that can be directly integrated into the Lakehouse, accelerating analytics and reducing ingestion overhead."
  }
];
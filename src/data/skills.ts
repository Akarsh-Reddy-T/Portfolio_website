import { SkillGroup } from "@/types/portfolio";

export const skills: SkillGroup[] = [
  {
    id: "programming-data",
    category: "Programming and Data",
    items: [
      { id: "python", name: "Python", level: "Advanced" },
      { id: "sql", name: "SQL", level: "Advanced" },
      { id: "r", name: "R", level: "Working" },
      { id: "pandas", name: "Pandas", level: "Advanced" },
      { id: "numpy", name: "NumPy", level: "Advanced" },
      { id: "excel", name: "Excel (Pivot, VLOOKUP, VBA)", level: "Intermediate" },
      { id: "web-scraping", name: "Web Scraping", level: "Intermediate" },
      { id: "etl", name: "ETL Pipelines", level: "Advanced" },
      { id: "tableau", name: "Tableau", level: "Advanced" },
      { id: "power-bi", name: "Power BI", level: "Intermediate" },
      { id: "plotly", name: "Plotly", level: "Intermediate" },
      { id: "streamlit", name: "Streamlit", level: "Intermediate" }
    ]
  },
  {
    id: "ai-ml",
    category: "AI and Machine Learning",
    items: [
      { id: "pytorch", name: "PyTorch", level: "Advanced" },
      { id: "tensorflow", name: "TensorFlow", level: "Advanced" },
      { id: "genai", name: "Generative AI", level: "Advanced" },
      { id: "llms", name: "Large Language Models", level: "Advanced" },
      { id: "prompt-eng", name: "Prompt Engineering", level: "Advanced" },
      { id: "fine-tuning", name: "Fine-Tuning", level: "Advanced" },
      { id: "crewai", name: "CrewAI", level: "Advanced" },
      { id: "langchain", name: "LangChain", level: "Advanced" },
      { id: "langgraph", name: "LangGraph", level: "Advanced" },
      { id: "rag", name: "RAG Architectures", level: "Advanced" },
      { id: "gnn", name: "Graph Neural Networks", level: "Intermediate" },
      { id: "xgboost", name: "XGBoost", level: "Intermediate" },
      { id: "hugging-face", name: "Hugging Face Transformers", level: "Intermediate" }
    ]
  },
  {
    id: "cloud-platform",
    category: "Cloud and Platform",
    items: [
      { id: "aws", name: "AWS (S3, Lambda, SageMaker, Bedrock)", level: "Advanced" },
      { id: "docker", name: "Docker", level: "Intermediate" },
      { id: "dynamodb", name: "DynamoDB", level: "Intermediate" },
      { id: "pinecone", name: "Pinecone Vector DB", level: "Intermediate" },
      { id: "databricks", name: "Databricks", level: "Working" },
      { id: "faiss", name: "FAISS", level: "Intermediate" },
      { id: "api-integration", name: "REST API Integration", level: "Advanced" },
      { id: "sqs-ses", name: "AWS SQS / SES", level: "Intermediate" }
    ]
  },
  {
    id: "mlops-workflow",
    category: "MLOps and Workflow Orchestration",
    items: [
      { id: "airflow", name: "Apache Airflow", level: "Advanced" },
      { id: "kubeflow", name: "Kubeflow Pipelines", level: "Intermediate" },
      { id: "mlflow", name: "MLflow", level: "Advanced" },
      { id: "eval", name: "Model Evaluation and Optimization", level: "Advanced" },
      { id: "ab-testing", name: "A/B Testing", level: "Intermediate" }
    ]
  },
  {
    id: "nlp-agentic",
    category: "NLP and Agentic Systems",
    items: [
      { id: "spacy", name: "spaCy", level: "Intermediate" },
      { id: "rasa", name: "Rasa", level: "Intermediate" },
      { id: "dialogflow", name: "Dialogflow", level: "Intermediate" },
      { id: "mcp", name: "MCP Patterns", level: "Advanced" },
      { id: "intent-design", name: "Intent and Entity Design", level: "Advanced" }
    ]
  }
];

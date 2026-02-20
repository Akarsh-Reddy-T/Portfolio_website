import { ExperienceItem } from "@/types/portfolio";

export const experience: ExperienceItem[] = [
  {
    id: "focalcxm",
    role: "Associate AI Engineer",
    company: "FocalCXM LLC",
    period: "Jun 2025 - Present",
    bullets: [
      "Architected and deployed scalable AI agents using CrewAI, LangChain, LangGraph, and AWS services for high-throughput business workflows.",
      "Integrated GPT-4o and custom embedding pipelines with REST APIs, DynamoDB, and Pinecone to improve intent classification by 35%.",
      "Designed and operationalized RAG and MCP-style orchestration patterns that reduced manual processing time by 50%.",
      "Led iterative prompt engineering, evaluation loops, and optimization for lead generation quality and conversion."
    ]
  },
  {
    id: "honda",
    role: "Machine Learning Researcher (Capstone Project)",
    company: "Honda",
    period: "Jan 2025 - Jun 2025",
    bullets: [
      "Built an LLM analytics platform with OpenAI, DeepSeek, and LLaMA to cut report generation time by 50%.",
      "Engineered transformer benchmarking for latency and interpretability, improving inference throughput by 30%.",
      "Partnered with domain experts to improve output quality and drive enterprise report adoption.",
      "Implemented adaptive prompt-feedback loops to improve consistency, explainability, and user trust."
    ]
  },
  {
    id: "serentica",
    role: "Data Scientist",
    company: "Serentica Renewables (KKR and Co)",
    period: "May 2023 - Aug 2023",
    bullets: [
      "Forecasted market trends from Indian Energy Exchange (IEX) datasets, increasing prediction accuracy by 25%.",
      "Refactored Python pipelines with NumPy vectorization, reducing processing time by 20% and improving operational efficiency.",
      "Integrated time-series insights into live dashboards, enabling faster energy trading decisions with stakeholder alignment.",
      "Collaborated with cross-functional teams to translate analytics outputs into actionable strategies."
    ]
  },
  {
    id: "corizo",
    role: "Data Scientist",
    company: "Corizo",
    period: "Sep 2022 - Nov 2022",
    bullets: [
      "Engineered customer segmentation and predictive pipelines using TensorFlow, PyTorch, XGBoost, Hugging Face, GANs, and Graph Neural Networks.",
      "Improved predictive performance by 18% through model experimentation, feature design, and systematic tuning.",
      "Automated ETL workflows with Apache Airflow, Kubeflow Pipelines, and MLflow, reducing data preparation time by 40%.",
      "Built Streamlit and Plotly dashboards that informed client strategy and increased project adoption by 30%."
    ]
  },
  {
    id: "neogeoinfo",
    role: "AI/ML Engineer",
    company: "NeoGeoInfo Technologies",
    period: "Aug 2019 - Aug 2022",
    bullets: [
      "Developed production chatbots with Rasa/Dialogflow and backend integrations via FastAPI/Flask.",
      "Implemented evaluation pipelines with MLflow and automated workflows using Docker + Airflow.",
      "Deployed AI workloads on AWS (EC2, Lambda, SageMaker) and built Tableau dashboards for KPI visibility.",
      "Built NLP and classification pipelines with scikit-learn, spaCy, and transformer models for enterprise use cases."
    ]
  }
];

import { ProjectItem } from "@/types/portfolio";

export const projects: ProjectItem[] = [
  {
    id: "voice-assistant-gtm",
    title: "AI Voice Assistant for GTM Automation",
    summary: "Built a real-time AI voice assistant that handled product inquiries, captured qualified leads, and triggered CRM actions across GTM workflows.",
    techStack: ["LiveKit", "OpenAI", "Whisper", "Python"],
    highlights: [
      "Implemented streaming STT/TTS for smooth, low-latency conversation.",
      "Designed multi-turn intent extraction and next-best-action flows.",
      "Automated lead capture and CRM update triggering from call outcomes.",
      "Added conversation-to-structured-data conversion for downstream sales operations."
    ],
    featured: true,
    status: "Production"
  },
  {
    id: "lead-gen-agent",
    title: "Lead Generation AI Agent",
    summary: "Delivered a LangChain + AWS agent ecosystem that converted unstructured inbound communication into high-quality, ranked lead pipelines.",
    techStack: ["LangChain", "AWS Lambda", "AWS SageMaker", "Pinecone", "Amazon S3"],
    highlights: [
      "Increased pipeline volume by 50% with automated extraction and follow-up orchestration.",
      "Used RAG pipelines to convert emails and web data into structured lead records.",
      "Improved lead quality by 40% with qualification and enrichment logic.",
      "Integrated follow-up coordination workflows for more consistent outbound conversion."
    ],
    featured: true,
    status: "Production"
  },
  {
    id: "healthcare-mcp",
    title: "Healthcare Insurance MCP Chatbot",
    summary: "Implemented a multi-agent healthcare chatbot with advanced RAG grounding and schema-validated outputs for insurance claims workflows.",
    techStack: ["MCP", "AWS Bedrock", "Claude 3 Sonnet", "FAISS", "Streamlit"],
    highlights: [
      "Delivered function-calling chatbot with high-confidence, schema-validated responses.",
      "Grounded answers using Titan embeddings and FAISS retrieval.",
      "Added eval harness and prompt versioning for repeatable quality tracking.",
      "Reduced hallucination risk by enforcing retrieval-grounded and auditable answer generation."
    ],
    featured: true,
    status: "Live"
  },
  {
    id: "llm-analytics-platform",
    title: "LLM Analytics Platform (Honda Capstone)",
    summary: "Designed an analytics platform to benchmark and evaluate LLM outputs for enterprise reporting use cases.",
    techStack: ["OpenAI", "DeepSeek", "LLaMA", "Python", "Evaluation Pipelines"],
    highlights: [
      "Reduced report generation time by 50% through prompt and workflow optimization.",
      "Built benchmark suites for latency, interpretability, and model quality comparisons.",
      "Improved throughput by 30% with systematic model configuration tuning."
    ],
    featured: false,
    status: "Production"
  },
  {
    id: "energy-market-forecasting",
    title: "Energy Market Forecasting Dashboard",
    summary: "Built an end-to-end forecasting and dashboarding system for Indian Energy Exchange trend analysis.",
    techStack: ["Python", "NumPy", "Time-Series Modeling", "Dashboarding"],
    highlights: [
      "Improved forecasting accuracy by 25% with refined data preparation and model selection.",
      "Reduced pipeline runtime by 20% via vectorized processing techniques.",
      "Integrated operational dashboard views for faster stakeholder decision-making."
    ],
    featured: false,
    status: "Production"
  }
];

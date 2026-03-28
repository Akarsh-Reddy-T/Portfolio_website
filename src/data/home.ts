import { HomeContent } from "@/types/portfolio";

export const homeContent: HomeContent = {
  headline: "Building practical AI systems that ship measurable business outcomes.",
  subheadline: "Senior AI Engineer with a Master's in Data Science, focused on turning raw data into intelligent, actionable systems.",
  introParagraphs: [
    "I thrive on bridging data science and engineering to deliver AI solutions that are technically robust and deeply practical for business teams.",
    "My work focuses on AI agents, cloud-based ML deployments, and RAG pipelines using CrewAI, LangChain, LangGraph, AWS, and MCP-inspired orchestration patterns.",
    "In my current role at Slalom, I design and deploy scalable AI workflows and production-ready ML systems, helping turn early ideas into enterprise-grade solutions.",
    "I enjoy translating complex requirements into intuitive tools, collaborating across teams, and continuously learning through hands-on experimentation with LLMs, prompt design, and model evaluation."
  ],
  quickStats: [
    { label: "Current Role", value: "Senior AI Engineer, Slalom" },
    { label: "Education", value: "MS Data Science, CU Boulder" },
    { label: "Graduate GPA", value: "3.97 / 4.0" },
    { label: "Focus", value: "AI Agents, RAG, MLOps" }
  ],
  featuredProjectIds: ["voice-assistant-gtm", "lead-gen-agent", "healthcare-mcp"]
};

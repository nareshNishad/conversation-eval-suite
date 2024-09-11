import { Metric } from "./types";

export const apiEndpoint = "http://localhost:3000/api";

export const metrics: Metric[] = [
  { id: "question-clarity", label: "Question Clarity" },
  { id: "answer-relevance", label: "Answer Relevance" },
  { id: "fluency-and-grammar", label: "Fluency and Grammar" },
  { id: "completeness", label: "Completeness" },
  { id: "conciseness", label: "Conciseness" },
  { id: "accuracy", label: "Accuracy" },
  { id: "coherence", label: "Coherence" },
  { id: "contextual-awareness", label: "Contextual Awareness" },
  { id: "handling-of-uncertainty", label: "Handling of Uncertainty" },
  {
    id: "creativity-and-insightfulness",
    label: "Creativity and Insightfulness",
  },
];

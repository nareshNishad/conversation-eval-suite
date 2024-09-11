export interface Message {
  type: string;
  content: string;
  evaluationResult?: EvaluationResult;
}

export interface EvaluationResult {
  metric: string;
  score: number;
  explanation: string;
  suggestions: string;
  graph: {
    type: string;
    dataPoints: { label: string; value: number }[];
    interpretation: string;
  };
}
export interface Metric {
  id: string;
  label: string;
}

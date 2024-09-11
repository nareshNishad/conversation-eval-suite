const metricDefinitions = require("./promptData");

function generatePrompt(metric, conversation, file = null) {
  if (!metricDefinitions.hasOwnProperty(metric)) {
    return "Please provide a valid metric for evaluation.";
  }

  const { task, instruction, example, graphType } = metricDefinitions[metric];

  return `
Task: ${task}

Instruction: ${instruction}

Example:
${example.input}
Feedback: ${example.feedback}

Conversation:
${conversation}

Please provide your evaluation in the following structured format:
1. Score: [Provide a score from 1 to 10, where 1 is poor and 10 is excellent]
2. Explanation: [Provide a brief explanation for your score, citing specific examples from the conversation]
3. Suggestions for Improvement: [Offer concrete suggestions on how the bot's performance could be improved in this aspect]
4. Graph Visualization (Structured Format): 
   - Graph Type: ${graphType}
   - Data Points:
      [
        { "label": "[Label for X-Axis]", "value": [Numerical Value] },
        { "label": "[Label for X-Axis]", "value": [Numerical Value] },
        ...
      ]
   - Interpretation: [Provide an explanation of the graph and what it demonstrates about the bot's performance on this metric]

Response:
Please provide your response in the following JSON format:
  {
    "score": [number between 1 and 10],
    "explanation": "[brief explanation for the score]",
    "suggestions": "[concrete suggestions for improvement]",
    "graph": {
      "type": "[graph type]",
      "dataPoints": [
        { "label": "[label]", "value": [number] },
        ...
      ],
      "interpretation": "[interpretation of the graph]"
    }`;
}

module.exports = generatePrompt;

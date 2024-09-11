const metricDefinitions = {
  "question-clarity": {
    task: "Evaluate how clear the user's question is in the conversation.",
    instruction:
      "Assess if the user's question is specific and easy to understand. Provide specific feedback on whether the user's query needs clarification.",
    example: {
      input: "User: What are the hours of operation for your store?",
      feedback:
        "The question is clear and specific, and no further clarification is needed.",
    },
    graphType:
      "Bar chart showing clarity scores for each user question in the conversation",
  },
  "answer-relevance": {
    task: "Evaluate the relevance of the bot's response to the user's question.",
    instruction:
      "Determine whether the bot's response directly answers the user's question and if the answer is on-topic.",
    example: {
      input:
        "User: What time does the store close?\nBot: The store closes at 9 PM.",
      feedback:
        "The bot's response is highly relevant and directly answers the user's query.",
    },
    graphType: "Scatter plot showing relevance score for each bot response",
  },
  "fluency-and-grammar": {
    task: "Assess the fluency and grammar of the response in the conversation.",
    instruction:
      "Check for grammatical errors and overall readability. Is the language natural, clear, and free from errors?",
    example: {
      input: "Bot: I can assists you with that.",
      feedback:
        "The response contains a grammatical error ('assists' should be 'assist'). Otherwise, the response is clear.",
    },
    graphType:
      "Line graph showing fluency and grammar scores over the course of the conversation",
  },
  completeness: {
    task: "Evaluate the completeness of the bot's response.",
    instruction:
      "Does the bot fully answer the user's question, or does it leave out important details?",
    example: {
      input:
        "User: Can you help me book a flight to Paris tomorrow morning?\nBot: Sure, I can help with that.",
      feedback:
        "The bot's response is incomplete because it doesn't ask for key details, like the departure time, or provide further assistance.",
    },
    graphType: "Stacked bar chart showing completeness of each bot response",
  },
  conciseness: {
    task: "Evaluate the conciseness of the bot's response.",
    instruction:
      "Is the response concise while still providing the necessary information? Avoid unnecessary details or verbosity.",
    example: {
      input:
        "User: What is the weather today?\nBot: The weather is sunny with a high of 25°C.",
      feedback:
        "The response is concise and contains all necessary information.",
    },
    graphType:
      "Bubble chart with size of bubble representing conciseness of each response",
  },
  accuracy: {
    task: "Assess the factual accuracy of the bot's response in the conversation.",
    instruction:
      "Check if the bot's response contains correct and verifiable information.",
    example: {
      input:
        "User: What is the capital of France?\nBot: The capital of France is Berlin.",
      feedback:
        "The bot's response is factually incorrect; the correct answer is Paris.",
    },
    graphType:
      "Heatmap showing accuracy levels for different topics in the conversation",
  },
  coherence: {
    task: "Evaluate the coherence of the bot's responses throughout the conversation.",
    instruction:
      "Does each response logically follow from the user's input? Does the conversation flow naturally and make sense?",
    example: {
      input:
        "User: Can you help me with my booking?\nBot: Yes, what flight are you looking for?",
      feedback:
        "The response is coherent and follows the user's request logically.",
    },
    graphType:
      "Network graph showing connections between user inputs and bot responses",
  },
  "contextual-awareness": {
    task: "Evaluate how well the bot takes context into account when responding.",
    instruction:
      "Does the bot consider previous interactions or responses to provide a contextually aware answer?",
    example: {
      input:
        "User: Can you book a table for tomorrow night?\nBot: Sure, what time?",
      feedback:
        "The bot's response is contextually aware and builds on the user's previous input.",
    },
    graphType:
      "Radar chart showing different aspects of contextual awareness in the conversation",
  },
  "handling-of-uncertaint": {
    task: "Evaluate how well the bot handles uncertainty in the conversation.",
    instruction:
      "Does the bot clarify or ask follow-up questions when the user's input is unclear?",
    example: {
      input:
        "User: Can I get that product in blue?\nBot: Which product are you referring to?",
      feedback:
        "The bot's response is appropriate as it asks for clarification when faced with uncertainty.",
    },
    graphType:
      "Donut chart showing proportion of responses that handle uncertainty well",
  },
  "creativity-and-insightfulness": {
    task: "Evaluate the creativity and insightfulness of the bot's response.",
    instruction:
      "Does the bot provide unique or thoughtful responses beyond simple factual answers?",
    example: {
      input:
        "User: How can I make my living room more cozy?\nBot: Consider using soft lighting, throw blankets, and house plants to make the space feel more welcoming.",
      feedback:
        "The bot provides creative and thoughtful suggestions that are insightful.",
    },
    graphType:
      "Word cloud of creative and insightful terms used in bot responses",
  },
};

module.exports = metricDefinitions;

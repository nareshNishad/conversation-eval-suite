# Chat Conversation evaluation tool

## Project Overview

This project is designed to evaluate the responses of large User and bot conversation based on different metrics such as **relevance**, **clarity**, **coherence**, and more. The system consists of a backend built with **Node.js (Express)** and a frontend using **React (Vite)**. The system uses OpenAI's gpt-3.5-turbo model to analyze user conversations based on user-specified metrics.

## Demo

![](./demo.gif)

### Features

- **Metric-based evaluation**: Allows users to submit conversations and evaluate them using various metrics.
- **Dynamic prompt engineering**: The backend dynamically generates evaluation prompts based on the selected metric.
- **LLM-powered**: Uses OpenAI’s gpt-3.5-turbo model to perform evaluations on conversations.
- **Frontend-Backend integration**: Simple React-based frontend for interacting with the backend service and viewing evaluation results.

### Metrics for Evaluation

1. **Question Clarity**: Evaluates how clear and specific the user's question is.
2. **Answer Relevance**: Assesses whether the bot's response is directly related to the user's question.
3. **Fluency and Grammar**: Checks for grammatical errors and readability in the bot's response.
4. **Completeness**: Ensures that the bot’s response fully answers the user’s question without missing key details.
5. **Conciseness**: Evaluates if the bot's response is concise while still providing necessary information.
6. **Accuracy**: Assesses the factual correctness of the bot's response.
7. **Coherence**: Measures the logical flow of the bot's responses throughout the conversation.
8. **Contextual Awareness**: Evaluates how well the bot remembers and utilizes the context of the conversation in its responses.
9. **Handling of Uncertainty**: Assesses how well the bot handles unclear or ambiguous inputs.
10. **Creativity and Insightfulness**: Evaluates the originality and depth of the bot's responses.

---

## System Architecture

- **Backend**: Node.js with Express
- **Frontend**: React (Vite)
- **LLM Evaluation**: OpenAI gpt-3.5-turbo API

---

## Setup Instructions

### Backend Setup

1. **Clone the repository**:

   ```
   git clone git@github.com:nareshNishad/conversation-eval-suite.git
   cd conversation-eval-suite/backend
   npm install
   ```

2. **Create .env file**:
   In the \`backend\` directory, rename \`.env.example\` file to \`.env\`. Add your OpenAI API key.

   ```
   touch .env
   ```

   Example \`.env\` file content:

   ```
   OPENAI_API_KEY=your-openai-api-key
   PORT=3000
   ```

3. **Run the backend server**:

   ```
   npm start
   ```

   The backend server should now be running on \`http://localhost:3000\`.

### Frontend Setup

1. **Navigate to the frontend directory**:

   ```
   cd ../frontend
   npm install
   ```

2. **Run the frontend development server**:

   ```
   npm run dev
   ```

   The frontend server should now be running on \`http://localhost:5173\`.

---

## Project Structure

### Backend (\`/backend\`)

- \`server.js\`: Main server file, sets up API routes and communicates with OpenAI's API.
- \`routes\`: Contains route definitions for handling evaluation requests.
- \`utils\`: Utility functions, including the \`generatePrompt\` function for dynamically creating prompts based on evaluation metrics.

### Frontend (\`/frontend\`)

- \`src/component\`: Contains the React components for the user interface.
- \`src/App.jsx\`: Main application file.
- \`vite.config.js\`: Configuration for the Vite bundler.

---

## Usage Instructions

1. **Open the frontend in the browser**:
   Navigate to \`http://localhost:5173\` after starting both the frontend and backend servers.

2. **Submit a conversation for evaluation**:

   - Select a metric from the dropdown list (e.g., "Answer Relevance").
   - Enter the user-bot conversation into the input field.
   - Click **Submit** to receive the evaluation result from the backend.

3. **View the evaluation result**:
   The result of the evaluation will be displayed below the form.

---

## Future Enhancements

- **Multi-metric evaluation**: Allow users to select multiple metrics for a single conversation.
- **User authentication**: Add user accounts and history tracking for previous evaluations.

---

import React, { useState } from "react";
import Header from "./header";
import ChatboxArea from "./chatboxArea";
import MessageArea from "./messageArea";
import { EvaluationResult, Message } from "../../types";
import { metrics } from "../../constant";
import { getApiResponse } from "../api/apiHelper";

const ChatbotUI: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState<string>(""); // For text input
  const [selectedMetric, setSelectedMetric] =
    useState<string>("question-clarity");

  const handleMetricChange = (value: string) => {
    setSelectedMetric(value);
  };

  async function runEvaluation(file?: File) {
    try {
      // Call the API to get the evaluation result
      const resData = await getApiResponse(selectedMetric, inputMessage, file);
      const evaluationData: EvaluationResult =
        typeof resData === "string" ? JSON.parse(resData) : resData;

      const evaluationMessage = `Evaluation Result: Score - ${evaluationData.score}/10. Explanation: ${evaluationData.explanation} Suggestions: ${evaluationData.suggestions}`;

      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content: evaluationMessage,
          evaluationResult: evaluationData, // Store full evaluation data
        },
      ]);
    } catch (error) {
      console.error("Error occurred during evaluation:", error);
      // Handle the error here, e.g., show an error message to the user
      setMessages((prev) => [
        ...prev,
        { type: "bot", content: "Error processing evaluation." },
      ]);
    }
  }

  const handleSendMessage = async () => {
    if (inputMessage.trim()) {
      setMessages((prev) => [
        ...prev,
        { type: "user", content: inputMessage.trim() },
      ]);
      setInputMessage(""); // Clear the input field
      await runEvaluation();
    }
  };

  const handleFileUpload = async (file: File) => {
    setMessages((prev) => [
      ...prev,
      { type: "user", content: file.name }, // Show the file name
    ]);
    await runEvaluation(file);
  };

  return (
    <div className='h-screen max-w-4xl mx-auto flex flex-col p-4'>
      <Header
        handleMetricChange={handleMetricChange}
        selectedMetric={selectedMetric}
        metrics={metrics}
      />
      <MessageArea messages={messages} /> {/* Displays messages */}
      <ChatboxArea
        onSendMessage={handleSendMessage}
        onFileUpload={handleFileUpload}
        inputMessage={inputMessage}
        setInputMessage={setInputMessage}
      />
    </div>
  );
};

export default ChatbotUI;

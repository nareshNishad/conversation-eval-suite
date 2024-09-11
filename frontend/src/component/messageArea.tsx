import React, { useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Message } from "../../types";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface MessageAreaProps {
  messages: Message[];
}

const MessageArea: React.FC<MessageAreaProps> = ({ messages }) => {
  const messageEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom function using scrollIntoView
  const scrollToBottom = () => {
    if (messageEndRef.current) {
      messageEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Trigger scroll on new message
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Function to generate the bar chart data
  const getBarChartData = (dataPoints: { label: string; value: number }[]) => {
    return {
      labels: dataPoints.map((dp) => dp.label),
      datasets: [
        {
          label: "Score",
          data: dataPoints.map((dp) => dp.value),
          backgroundColor: "rgba(75, 192, 192, 0.6)", // Customize the bar color here
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
        },
      ],
    };
  };

  return (
    <div className='flex flex-col space-y-4 overflow-y-auto p-4 bg-gray-100 h-full'>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${
            message.type === "user" ? "justify-end" : "justify-start"
          }`}
        >
          <div
            className={`max-w-md px-4 py-2 rounded-lg shadow ${
              message.type === "user"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            {/* Render the message content for user messages */}
            {message.type === "user" && <p>{message.content}</p>}

            {/* If the message contains an evaluation result, display it formatted */}
            {message.type === "bot" && message.evaluationResult && (
              <div className='mt-4'>
                <p>
                  <strong>Score:</strong> {message.evaluationResult.score}/10
                </p>
                <p>
                  <strong>Explanation:</strong>{" "}
                  {message.evaluationResult.explanation}
                </p>
                <p>
                  <strong>Suggestions:</strong>{" "}
                  {message.evaluationResult.suggestions}
                </p>

                {/* Render the graph interpretation */}
                <p>
                  <strong>Graph Interpretation:</strong>{" "}
                  {message.evaluationResult.graph.interpretation}
                </p>

                {/* If the message contains a graph, render the graph */}
                {message.evaluationResult.graph && (
                  <div className='mt-4'>
                    <Bar
                      data={getBarChartData(
                        message.evaluationResult.graph.dataPoints
                      )}
                      options={{
                        responsive: true,
                        plugins: {
                          legend: {
                            display: false,
                          },
                          title: {
                            display: false, // We moved the interpretation outside the chart title
                          },
                        },
                        scales: {
                          x: {
                            ticks: {
                              font: {
                                size: 12, // Customize the font size for the x-axis labels
                              },
                              maxRotation: 20,
                              minRotation: 20, // Rotate x-axis labels for better readability
                            },
                          },
                          y: {
                            beginAtZero: true,
                            ticks: {
                              font: {
                                size: 14, // Customize the font size for the y-axis labels
                              },
                            },
                          },
                        },
                      }}
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
      {/* Div to ensure scrolling to the end */}
      <div ref={messageEndRef}></div>
    </div>
  );
};

export default MessageArea;

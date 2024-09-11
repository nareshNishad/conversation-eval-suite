import axios from "axios";
import { EvaluationResult } from "../../types";
import { apiEndpoint } from "../../constant";

export const getApiResponse = async (
  selectedMetric: string,
  inputMessage: string,
  file: null | File = null
) => {
  if (!selectedMetric) return;
  try {
    let response;
    if (file) {
      const formData = new FormData();
      formData.append("metric", selectedMetric);
      formData.append("file", file);

      response = await axios.post(`${apiEndpoint}/evaluate`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    } else if (inputMessage) {
      const requestBody = {
        metric: selectedMetric,
        conversation: inputMessage,
      };

      response = await axios.post(`${apiEndpoint}/evaluate`, requestBody, {
        headers: { "Content-Type": "application/json" },
      });
    }

    if (response?.status === 200 && response?.data) {
      return response.data;
    }
  } catch (error) {
    console.error("Error during evaluation:", error);
  }
};

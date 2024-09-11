const express = require("express");
const { OpenAI } = require("openai");
const dotenv = require("dotenv");
const multer = require("multer");
const generatePrompt = require("../utils/prompt.helper");
const fs = require("fs");

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const upload = multer({ dest: "uploads/" });

async function callOpenAI(conversation, metric) {
  const prompt = generatePrompt(metric, conversation);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [{ role: "system", content: prompt }],
    max_tokens: 500,
  });

  const evaluation = response?.choices[0].message.content.trim();
  return JSON.parse(evaluation);
}

router.post("/evaluate", upload.single("file"), async (req, res) => {
  const { metric } = req.body;
  const file = req.file;
  let conversation;

  if (!metric) {
    return res.status(400).json({ error: "Please provide a valid metric." });
  }

  try {
    if (file) {
      conversation = fs.readFileSync(file.path, "utf-8");
    } else {
      conversation = req.body.conversation;
    }

    if (!conversation) {
      return res.status(400).json({
        error:
          "Please provide a conversation or upload a file containing the conversation.",
      });
    }

    const result = await callOpenAI(conversation, metric);

    res.json({ metric, ...result });

    if (file) {
      fs.unlinkSync(file.path);
    }
  } catch (error) {
    console.error("Error generating response:", error);
    return res
      .status(500)
      .json({ error: "Failed to generate evaluation response." });
  }
});

module.exports = router;

const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const cors = require("cors");

const app = express();
// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());
app.use(routes);

// Utility function to generate a better-engineered prompt based on the metric
app.get("/ping", (_, res) => {
  res.json({ status: "pong" });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

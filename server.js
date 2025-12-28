require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", require("./routes"));

app.get("/", (req, res) => {
  res.send("Backend is running");
});

const PORT = 5000;
const HOST = "0.0.0.0";   // 🔥 THIS FIXES YOUR ISSUE

app.listen(PORT, HOST, () => {
  console.log(`Server running on http://${HOST}:${PORT}`);
});

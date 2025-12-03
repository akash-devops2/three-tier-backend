const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const mongoURL = process.env.MONGO_URL;

// connect to MongoDB
mongoose.connect(mongoURL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log("MongoDB connection error:", err));

// health endpoint
app.get("/ok", (req, res) => {
  res.send("Backend is healthy");
});

// sample API
app.get("/api/tasks", (req, res) => {
  res.json({ message: "Tasks API working!" });
});

app.listen(3500, () => console.log("Backend running on port 3500"));

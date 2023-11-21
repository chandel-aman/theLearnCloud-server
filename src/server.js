const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const doenv = require("dotenv");
const bodyParser = require("body-parser");
const todoRoutes = require("./routes/todo.route");

doenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());

// Check if MONGO_URI is defined
if (!process.env.MONGO_DB_URL) {
  console.error("MONGO_URI is not defined in the environment variables.");
  process.exit(1);
}

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

// Use routes
app.use("/api", todoRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

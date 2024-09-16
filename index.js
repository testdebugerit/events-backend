const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Import routes
const eventRoutes = require("./routes/event.route");
const userRoutes = require("./routes/user.route");

app.use("/api/events", eventRoutes);
app.use("/api/users", userRoutes);

// Connect to MongoDB
// mongoose.connect("mongodb://localhost:27017/events", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/events");
    console.log("db connected");
  } catch (error) {
    throw error;
  }
};
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

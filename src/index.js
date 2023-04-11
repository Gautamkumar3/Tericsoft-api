const express = require("express");
const dbConnect = require("./config/db");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
const userRouter = require("./route/user");
const bmiRouter = require("./route/BMI");

const app = express();
app.use(express.json());
app.use("/user", userRouter);
app.use("/", bmiRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Tericsoft");
});

app.listen(PORT, async (req, res) => {
  await dbConnect();
  console.log(`Server is running on port ${PORT}`);
});
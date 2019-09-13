import bodyParser from "body-parser";
import express from "express";
import userRoute from "./routes/users";
const mongoose = require("mongoose");
const app = express();
const dotenv = require("dotenv");

dotenv.config();

// DB CONNECTION
mongoose.connect(process.env.DB, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// MIDDLEWARE
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin,Content-Type, Authorization, x-id, Content-Length, X-Requested-With"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES
app.use("/api/user", userRoute);

// START SERVER
app.listen(process.env.PORT, () => {
  console.log(`Sever is up on port: ${process.env.PORT}`);
});

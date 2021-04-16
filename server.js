import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const app = express();
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", (error) => console.log(`Connected to Database`));

app.use(express.json());

import subscribersRouter from "./routes/subscribers.js";
app.use("/subscribers", subscribersRouter);
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
app.listen(4996, () => console.log(`Server Started at 4996`));

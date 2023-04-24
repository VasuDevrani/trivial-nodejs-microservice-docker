import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// routers
import userRoutes from "./routes/userRoutes.js";

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Connection Error: ", err);
  });

app.use("/", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is listening at the port 3000");
});

import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
const app = express();
import wordsRouter from "./routes/words";
app.use(express.json());
app.use("/audio", express.static("./audio"));

const PORT = process.env.PORT || 3001;

mongoose.set("strictQuery", false);

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => {
    console.log("connected to MongoDB");
  })
  .catch((error) => {
    console.error("error connectiong to MongoDb", error.message);
  });

app.use("/api/words", wordsRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

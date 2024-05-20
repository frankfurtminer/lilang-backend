import mongoose from "mongoose";

const wordSchema = new mongoose.Schema({
  word: String,
  audioWord: String,
  definition: String,
  example: String,
  audioExample: String,
  transcription: String,
});

wordSchema.set("toJSON", {
  transform: (_, returnedObject) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

export default mongoose.model("Word", wordSchema);

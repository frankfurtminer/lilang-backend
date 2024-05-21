"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const wordSchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("Word", wordSchema);

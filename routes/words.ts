import express from "express";
import Word from "../models/word";

const router = express.Router();

router.get("/", (_, response) => {
  Word.find({})
    .then((words) => {
      response.json(words);
    })
    .catch(() => {
      response.status(500).end();
    });
});

export default router;

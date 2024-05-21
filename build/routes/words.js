"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const word_1 = __importDefault(require("../models/word"));
const router = express_1.default.Router();
router.get("/", (_, response) => {
    word_1.default.find({})
        .then((words) => {
        response.json(words);
    })
        .catch(() => {
        response.status(500).end();
    });
});
exports.default = router;

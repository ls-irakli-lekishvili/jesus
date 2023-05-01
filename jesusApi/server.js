import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { getAIResponse } from "./AI.mjs";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.post("/prompt", async (req, res) => {
  try {
    const response = await getAIResponse(req.body.text);
    res.set("Content-Type", "application/json");
    res.send(JSON.stringify({ text: response }));
  } catch (e) {
    console.log(e);
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

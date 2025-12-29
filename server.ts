import express from "express";
import fs from "fs";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/api/cats", (req, res) => {
  try {
    const data = fs.readFileSync("src/data/cats.json", "utf-8");
    const cats = JSON.parse(data);
    res.json(cats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Impossible de lire cats.json" });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
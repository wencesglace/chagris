import express from 'express';
import cors from "cors";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const app = express();
const port = 3000;

// Autoriser toutes les origines (pour dev local)
app.use(cors());

// dossier contenant tes MD de chats
const catsDir = path.join(process.cwd(), '/src/content/cats');

app.get('/api/cats', (req, res) => {
  try {
    const files = fs.readdirSync(catsDir);

    const cats = files.map(file => {
      const fullPath = path.join(catsDir, file);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContents);

      return data;
    });

    res.json(cats);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to read cats' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

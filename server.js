import express from "express";
import "dotenv/config";
import { Client } from "@notionhq/client";
import cors from "cors";


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const notion = new Client({ auth: process.env.NOTION_API_KEY });
const NOTION_DATABASE_ID = process.env.NOTION_DATABASE_ID;

function notionPageToCat(page) {
  const props = page.properties;
  return {
    nom: props.Nom?.title?.[0]?.plain_text || "Nom inconnu",
    age: props.Age?.number || undefined,
    sexe: props.Sexe?.select?.name || undefined,
    description: props.Description?.rich_text?.[0]?.plain_text || "",
    statut: props.Statut?.select?.name || "",
    maladie: props.Maladie?.select?.name || undefined,
    photo: props.Photo?.files?.[0]?.file?.url || undefined,
  };
}

app.get("/api/cats", async (req, res) => {
  try {
    const response = await notion.search({
      filter: { value: "page", property: "object" },
      page_size: 500,
    });

    const cats = response.results.map(notionPageToCat);

    res.json(cats);
  } catch (err) {
    console.error("Erreur Notion:", err);
    res.status(500).json({ error: "Impossible de récupérer les données Notion" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

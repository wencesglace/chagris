import { Client } from "@notionhq/client";
import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import axios from "axios";
import { notionPageToCat } from "./notionPageToCat.ts";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints.js";
import type { Cat } from "../src/types/cats.js";
import dotenv from "dotenv";

dotenv.config();

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const JSON_PATH = path.resolve("../src/data/cats.json");
const IMG_DIR = path.resolve("../src/data/images/cats");

// Crée le dossier si nécessaire
if (!fs.existsSync(IMG_DIR)) {
  fs.mkdirSync(IMG_DIR, { recursive: true });
}

// Type guard pour filtrer les pages Notion
function isPageObjectResponse(item: unknown): item is PageObjectResponse {
  return (
    typeof item === "object" &&
    item !== null &&
    "object" in item &&
    (item as { object: string }).object === "page" &&
    "properties" in item
  );
}

export async function fetchCatsFromNotion() {
  try {
    // Récupérer les pages depuis Notion
    const response = await notion.search({
      filter: { property: "object", value: "page" },
    });

    const cats: Cat[] = [];

    for (const item of response.results.filter(isPageObjectResponse)) {
      const cat = notionPageToCat(item);

      // ID basé sur l'ID Notion pour garantir l'unicité
      const id = item.id;

      // Télécharger l'image si elle existe
      let localPhotoPath: string | undefined;
      if (cat.photo) {
        const ext = path.extname(new URL(cat.photo).pathname) || ".jpg";
        localPhotoPath = path.join(IMG_DIR, `${id}${ext}`);
        try {
          const imgResp = await axios.get(cat.photo, { responseType: "arraybuffer" });
          fs.writeFileSync(localPhotoPath, imgResp.data);
        } catch (err) {
          console.warn(`Impossible de télécharger l'image pour ${cat.nom}:`, err);
          localPhotoPath = undefined;
        }
      }

      cats.push({
        id,
        nom: cat.nom,
        age: cat.age,
        sexe: cat.sexe,
        statut: cat.statut || "en attente",
        maladie: cat.maladie,
        description: cat.description,
        photo: localPhotoPath,
      });
    }

    // Supprimer les images locales obsolètes
    const validFiles = cats.filter((c) => c.photo).map((c) => path.basename(c.photo!));
    const existingFiles = fs.readdirSync(IMG_DIR);
    for (const file of existingFiles) {
      if (!validFiles.includes(file)) {
        fs.unlinkSync(path.join(IMG_DIR, file));
      }
    }

    // Écrire le JSON final
    fs.writeFileSync(JSON_PATH, JSON.stringify(cats, null, 2), "utf-8");
    console.log(`${cats.length} chats écrits`);
  } catch (error) {
    console.error("Erreur lors de la récupération des chats :", error);
  }
}

// Si on exécute ce fichier directement via node
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  fetchCatsFromNotion();
}
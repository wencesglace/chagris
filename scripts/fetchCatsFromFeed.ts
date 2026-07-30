// Ce script va chercher la liste des chats à l'adoption sur le flux fourni
// par le Fonds Saint-Bernard, et génère :
//  - src/data/cats.json (les infos texte)
//  - public/images/adoptions/*.jpg (les photos téléchargées)
//
// Il est lancé automatiquement avant chaque build (voir "prebuild" dans package.json),
// et peut aussi être lancé à la main avec : npm run fetch:cats

import { fileURLToPath } from "url";
import fs from "fs";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";
import { htmlToText } from "./htmlToText.ts";
import type { Cat } from "../src/types/cats.ts";

dotenv.config();

const JSON_PATH = path.resolve("src/data/cats.json");
const IMG_DIR = path.resolve("public/images/adoptions");
const PLACEHOLDER = "/images/placeholder.png";

// L'URL du flux (avec la clé secrète "hash") ne doit jamais être écrite en dur
// dans le code : elle vit dans le fichier .env (en local) et dans les variables
// d'environnement de Netlify (en production).
const FEED_URL = process.env.CATS_FEED_URL;

type FeedItem = {
  title: string;
  description?: string;
  content_text?: string;
  url: string;
  date_published?: string;
  attributes?: {
    age?: string;
    sex?: string;
  };
  images?: { url: string }[];
};

type FeedResponse = {
  items: FeedItem[];
};

/* ---------- Petits transformateurs texte -> valeurs du site ---------- */

function capitalize(value?: string): string | undefined {
  if (!value) return undefined;
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function normalizeSexe(value?: string): string | undefined {
  if (!value) return undefined;
  const lower = value.toLowerCase();
  if (lower.startsWith("f")) return "Femelle";
  if (lower.startsWith("m")) return "Mâle";
  return capitalize(value);
}

// Un identifiant stable et lisible, basé sur la fin de l'URL de l'annonce
// (ex: ".../75470-keira" -> "75470-keira")
function idFromUrl(url: string): string {
  const segments = url.split("/").filter(Boolean);
  return segments[segments.length - 1] || url;
}

/* ---------- Script principal ---------- */

export async function fetchCatsFromFeed() {
  if (!FEED_URL) {
    console.error(
      "CATS_FEED_URL n'est pas défini. Ajoute-le dans ton fichier .env (en local) " +
        "et dans les variables d'environnement de Netlify (en production)."
    );
    return;
  }

  if (!fs.existsSync(IMG_DIR)) {
    fs.mkdirSync(IMG_DIR, { recursive: true });
  }

  try {
    const response = await axios.get<FeedResponse>(FEED_URL);
    const items = response.data.items ?? [];

    const cats: Cat[] = [];

    for (const item of items) {
      const id = idFromUrl(item.url);
      const photoUrls = item.images?.map((img) => img.url) ?? [];

      const localPhotos: string[] = [];

      if (photoUrls.length === 0) {
        localPhotos.push(PLACEHOLDER);
      }

      for (let i = 0; i < photoUrls.length; i++) {
        const photoUrl = photoUrls[i];
        const ext = path.extname(new URL(photoUrl).pathname) || ".jpg";
        const filename = `${id}-${i}${ext}`;

        try {
          const imgResp = await axios.get(photoUrl, {
            responseType: "arraybuffer",
          });
          fs.writeFileSync(path.join(IMG_DIR, filename), imgResp.data);
          localPhotos.push(`images/adoptions/${filename}`);
        } catch {
          console.warn(`Image ${i} non récupérée pour ${item.title}`);
        }
      }

      cats.push({
        id,
        nom: item.title,
        ageCategory: capitalize(item.attributes?.age),
        sexe: normalizeSexe(item.attributes?.sex),
        description: htmlToText(item.description) ?? item.content_text,
        photo: localPhotos,
        url: item.url,
      });
    }

    // Supprime les images locales qui ne correspondent plus à aucun chat du flux
    const validFiles = cats.flatMap((c) => c.photo.map((p) => path.basename(p)));
    const existingFiles = fs.readdirSync(IMG_DIR);
    for (const file of existingFiles) {
      if (!validFiles.includes(file)) {
        fs.unlinkSync(path.join(IMG_DIR, file));
      }
    }

    fs.writeFileSync(JSON_PATH, JSON.stringify(cats, null, 2), "utf-8");
    console.log(`${cats.length} chat(s) récupéré(s) depuis le flux.`);
  } catch (error) {
    console.error("Erreur lors de la récupération des chats depuis le flux :", error);
  }
}

// Permet de lancer ce fichier directement avec : npx tsx scripts/fetchCatsFromFeed.ts
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  fetchCatsFromFeed();
}

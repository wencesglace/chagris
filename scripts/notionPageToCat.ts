import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { NotionCatProperties } from "./notionTypes";
import type { Cat } from "../src/types/cats";

/* ---------- Helpers ---------- */

function getPlainText(
  items?: { plain_text: string }[]
): string | undefined {
  if (!items || items.length === 0) return undefined;
  return items.map((item) => item.plain_text).join("");
}

function getFilesUrls(
  files?: NotionCatProperties["Photo"]["files"]
): string[] {
  if (!files || files.length === 0) {
    return ["src/data/images/placeholder.png"];
  }

  return files.map((file) =>
    file.type === "file"
      ? file.file.url
      : file.external.url
  );
}

function getDate(
  dateProperty?: { date: { start: string | null } | null }
): string | undefined {
  return dateProperty?.date?.start ?? undefined;
}

/* ---------- Mapper ---------- */

export function notionPageToCat(
  page: PageObjectResponse
): Omit<Cat, "id"> {
  const props = page.properties as unknown as NotionCatProperties;

  return {
    nom: getPlainText(props.Nom?.title) ?? "Nom inconnu",

    age:
      typeof props.Age?.number === "number"
        ? props.Age.number
        : undefined,

    sexe: props.Sexe?.select?.name ?? undefined,

    statut:
      props.Statut?.select?.name?.toLowerCase() ?? "en attente",

    maladie: props.Maladie?.select?.name ?? undefined,

    description: getPlainText(props.Description?.rich_text),

    rescueDate: getDate(props["Recueilli le"]),

    photo: getFilesUrls(props.Photo?.files),
  };
}

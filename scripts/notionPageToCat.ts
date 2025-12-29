import type { NotionCatProperties } from "./notionTypes.ts";
import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { Cat } from "../src/types/cats";
import { v4 as uuidv4 } from "uuid";

export function notionPageToCat(page: PageObjectResponse): Cat {
  const props = page.properties as unknown as NotionCatProperties;

  return {
    id: uuidv4(),
    nom: props.Nom?.title?.[0]?.plain_text ?? "Nom inconnu",
    age: typeof props.Age?.number === "number" ? props.Age.number : undefined,
    sexe: props.Sexe?.select?.name ?? undefined,
    statut: props.Statut?.select?.name?.toLowerCase() ?? "en attente",
    maladie: props.Maladie?.select?.name ?? undefined,
    description: props.Description?.rich_text?.[0]?.plain_text ?? undefined,
    photo:
      props.Photo?.files?.[0]?.type === "file"
        ? props.Photo.files[0].file.url
        : props.Photo?.files?.[0]?.external?.url ?? undefined,
  };
}

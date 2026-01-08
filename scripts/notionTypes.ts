export type NotionCatProperties = {
  Nom: { title: { plain_text: string }[] };
  Age: { number: number | null };
  Sexe: { select: { name: string } | null };
  Statut: { select: { name: string } | null };
  Maladie: { select: { name: string } | null };
  Description: { rich_text: { plain_text: string }[] };
  RescueDate: {
    date: {
      start: string;
      end: string | null;
    } | null;
  };
  Photo: {
    files: (
      | { type: "file"; file: { url: string } }
      | { type: "external"; external: { url: string } }
    )[];
  };
  "URL annonce": {
    url: string | null;
  };
};

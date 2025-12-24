export type Cat = {
  nom: string;
  age?: number;
  sexe: "mâle" | "femelle" | "inconnu";
  description: string;
  statut: string;
  maladie?: string;
  photo?: string;
};
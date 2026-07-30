export interface Cat {
  id: string;
  nom: string;
  ageCategory?: string; // ex: "Adulte", "Chaton" — fourni tel quel par le flux
  sexe?: string;        // "Femelle" ou "Mâle"
  maladie?: string;     // pas fourni par le flux actuel, gardé pour une saisie manuelle future
  description?: string;
  photo: string[];      // une ou plusieurs photos
  url?: string;
}

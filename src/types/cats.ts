export interface Cat {
  id: string;
  nom: string;
  age?: number;
  sexe?: string;
  statut: string;
  maladie?: string;
  description?: string;
  rescueDate?: string; // ← OPTIONNEL
  photo: string[];     // ← cohérent avec plusieurs photos
}

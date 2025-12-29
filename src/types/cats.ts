export interface Cat {
  id: string;
  nom: string;
  age?: number;          // age peut être undefined
  sexe?: string;         // sexe peut être undefined
  statut: string; // statut obligatoire
  maladie?: string;      // maladie optionnelle
  description?: string;  // description optionnelle
  photo?: string;        // photo optionnelle
}

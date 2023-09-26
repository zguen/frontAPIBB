import { Restriction } from "./restriction";
import { Saison } from "./saison";

export interface modifAliment {
  libelle: string;
  age_introduction: number;
  id_categorie: number;
  saisons: Saison[];
  restrictions: Restriction[];
}
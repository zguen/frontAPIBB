import { Categorie } from "./categorie";
import { Restriction } from "./restriction";
import { Saison } from "./saison";

export interface NewAliment {
    libelle: string,
    category: Categorie[],
    age_introduction: number,
    saisons: Saison[],
    restrictions: Restriction[]
}
import { Restriction } from "./restriction";
import { Saison } from "./saison";

export interface NewAliment {
    libelle: string,
    category: string,
    age_introduction: number,
    saisons: Saison[],
    restrictions: Restriction[]
}
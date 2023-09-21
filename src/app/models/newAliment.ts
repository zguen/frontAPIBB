import { Aliment } from "./aliment";
import { Categorie } from "./categorie";
import { Restriction } from "./restriction";
import { Saison } from "./saison";

export interface NewAliment {
    libelle: string,
    category: Categorie[],
    age_introduction: Aliment["age_introduction"],
    saisons: Saison[],
    restrictions: Restriction[]
}
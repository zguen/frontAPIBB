import { Aliment } from "./aliment";
import { Restriction } from "./restriction";
import { Saison } from "./saison";

export interface NewAliment {
    libelle: string,
    id_categorie: number,
    age_introduction: Aliment["age_introduction"],
    saisons: Saison[],
    restrictions: Restriction[]
}
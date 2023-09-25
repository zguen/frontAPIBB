import { Component, OnInit } from '@angular/core';
import { Aliment } from 'src/app/models/aliment';
import { Categorie } from 'src/app/models/categorie';
import { Restriction } from 'src/app/models/restriction';
import { Saison } from 'src/app/models/saison';
import { AlimentService } from 'src/app/services/aliment.service';
import { CategorieService } from 'src/app/services/categorie.service';
import { RestrictionsService } from 'src/app/services/restrictions.service';
import { SaisonsServiceService } from 'src/app/services/saisons-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modif-aliment',
  templateUrl: './modif-aliment.component.html',
  styleUrls: ['./modif-aliment.component.css'],
})
export class ModifAlimentComponent implements OnInit {
  aliment!: Aliment;
  saisons: Saison[] = [];
  selectedSaisons: Saison[] = [];
  restrictions: Restriction[] = [];
  selectedRestrictions: Restriction[] = [];
  categorie: Categorie[] = [];
  selectedCategorie: number[] = [];
  ages: Aliment[] = [];
  selectedAge: Aliment[] = [];

  constructor(
    private alimentService: AlimentService,
    private saisonsService: SaisonsServiceService,
    private restrictionsService: RestrictionsService,
    private categorieService: CategorieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    // Obtenez le paramètre 'id' depuis la route
    const alimentIdFromRoute = Number(this.route.snapshot.paramMap.get('id'));
    console.log('is this the good idea ? ', alimentIdFromRoute);

    // Utilisez l'ID récupéré pour obtenir l'objet Aliment correspondant
    this.alimentService.getAlimentById(alimentIdFromRoute).subscribe((data) => {
      this.aliment = data;
    });

    // Dans ngOnInit, récupérez les saisons depuis l'API en utilisant le SaisonService
    this.saisonsService.getSaisons().subscribe((data) => {
      this.saisons = data;
    });
    this.restrictionsService.getRestrictions().subscribe((data) => {
      this.restrictions = data;
    });
    this.categorieService.getCategories().subscribe((data) => {
      this.categorie = data;
    });
  }

  updateAliment(
    libelle: string,
    categoryId: number[],
    age_introduction: number,
    saisons: Saison[],
    restrictions: Restriction[]
  ) {

    if (!libelle) {
      libelle = this.aliment.libelle;
    }
    if (!age_introduction) {
      age_introduction = this.aliment.age_introduction;
    }
    if (saisons.length === 0) {
      // Si saisons n'est pas défini, utilisez la valeur d'origine
      saisons = this.aliment.saisons;
    }
    if (restrictions.length === 0) {
      restrictions = this.aliment.restrictions;
    }
    let updateAliment = {
      libelle: libelle,
      id_categorie: categoryId[0],
      age_introduction: age_introduction,
      saisons: saisons,
      restrictions: restrictions,
    };
    console.log(updateAliment);
    this.alimentService
      .updateAliment(this.aliment.id, updateAliment)
      .subscribe((data) => {
        if (data) {
          alert(`L'aliment ${data} a été mis à jour.`);
        }
      });
  }
}

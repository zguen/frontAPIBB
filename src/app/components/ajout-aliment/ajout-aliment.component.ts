import { Component, OnInit } from '@angular/core';
import { Aliment } from 'src/app/models/aliment';
import { NewAliment } from 'src/app/models/newAliment';
import { Restriction } from 'src/app/models/restriction';
import { Saison } from 'src/app/models/saison';
import { AlimentService } from 'src/app/services/aliment.service';
import { RestrictionsService } from 'src/app/services/restrictions.service';
import { SaisonsServiceService } from 'src/app/services/saisons-service.service';

@Component({
  selector: 'app-ajout-aliment',
  templateUrl: './ajout-aliment.component.html',
  styleUrls: ['./ajout-aliment.component.css'],
})
export class AjoutAlimentComponent implements OnInit {
  aliment!: Aliment;
  saisons: Saison[] = [];
  selectedSaisons: Saison[] = [];
  restrictions: Restriction[] = [];

  constructor(
    private alimentService: AlimentService,
    private saisonsService: SaisonsServiceService,
    private restrictionsService: RestrictionsService
  ) {}

  ngOnInit() {
    // Dans ngOnInit, récupérez les saisons depuis l'API en utilisant le SaisonService
    this.saisonsService.getSaisons().subscribe((data) => {
      this.saisons = data;
    });
    this.restrictionsService.getRestrictions().subscribe((data) => {
      this.restrictions = data;
    });
  }

  createAliment(
    libelle: string,
    category: string,
    age_introduction: number,
    saisons: Saison[],
    restrictions: string
  ) {
    let newAliment = {
      libelle: libelle,
      category: category,
      age_introduction: age_introduction,
      saisons: saisons,
      restrictions: this.restrictions,
    };
    if (!libelle || !category || !age_introduction || this.selectedSaisons.length === 0) {
      alert(`Merci de renseigner les champs vides`);
    } else {
      this.alimentService.createAliment(newAliment).subscribe((data) => {
        if (data.status == 'OK') {
          alert(`L'aliment id ${data.data.id} a été créée.`);
        }
      });
    }
  }

  clearModel() {
        this.selectedSaisons = [];
    }

}
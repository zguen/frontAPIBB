import { Component } from '@angular/core';
import { Aliment } from 'src/app/models/aliment';
import { NewAliment } from 'src/app/models/newAliment';
import { AlimentService } from 'src/app/services/aliment.service';

@Component({
  selector: 'app-ajout-aliment',
  templateUrl: './ajout-aliment.component.html',
  styleUrls: ['./ajout-aliment.component.css'],
})
export class AjoutAlimentComponent {
  aliment!: Aliment;

  constructor(private alimentService: AlimentService) {}

  createAliment(
    libelle: string,
    category: string,
    age_introduction: number,
    saisons: string,
    restrictions: string
  ) {
    let infoAliment = {
      libelle: libelle,
      category: category,
      age_introduction: age_introduction,
      saisons: saisons,
      restrictions: restrictions,
    };
    if (
      !libelle ||
      !category ||
      !age_introduction ||
      !saisons
    ) {
      alert(`Merci de renseigner les champs vides`);
    } else {
      this.alimentService.createAliment(infoAliment).subscribe((data) => {
        if (data.status == 'OK') {
          alert(`L'aliment id ${data.data.id} a été créée.`);
        }
      });
    }
  }
}

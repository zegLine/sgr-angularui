import { Component } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {PretgarantieService} from "../../services/api/pretgarantie/pretgarantie.service";
import {FormsModule} from "@angular/forms";
import {Router} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-pretgarantienou',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInput,
    MatButton,
    FormsModule
  ],
  templateUrl: './pretgarantienou.component.html',
  styleUrl: './pretgarantienou.component.css'
})
export class PretgarantienouComponent {
  valoare: number = 0.0;
  constructor(protected pgService: PretgarantieService, private _location: Location) {
  }

  createPretGarante(redirectBack: boolean) {
    this.pgService.createPretGarantie(this.valoare).subscribe({
      next: () => {
        console.log('Pret garantie added');
        if (redirectBack) {
          this._location.back();
        }
      }
    })
  }
}

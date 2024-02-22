import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel, MatPrefix, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {ItemService} from "../../services/api/item/item.service";
import {Location} from "@angular/common";

@Component({
  selector: 'app-itemnou',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatPrefix,
    MatSuffix
  ],
  templateUrl: './itemnou.component.html',
  styleUrl: './itemnou.component.css'
})
export class ItemnouComponent {
    item_name: string = "";
    item_weight_kg: number = 0.0;

    constructor(private itemService: ItemService, private _location: Location) {
    }


  createItem(redirectBack: boolean) {
    this.itemService.createItem(this.item_name, this.item_weight_kg).subscribe({
      next: () => {
        console.log('Item added');
        if (redirectBack) {
          this._location.back();
        }
      }
    })

  }
}

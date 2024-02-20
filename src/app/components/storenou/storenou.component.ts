import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel, MatPrefix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {StoreService} from "../../services/api/store/store.service";

@Component({
  selector: 'app-storenou',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    MatPrefix
  ],
  templateUrl: './storenou.component.html',
  styleUrl: './storenou.component.css'
})
export class StorenouComponent {
  store_name: string = "";
  store_description: string = "";

  constructor(private storeService: StoreService) {}

  createStore() {
    this.storeService.createStore(this.store_name, this.store_description).subscribe({
      next: () => {
        console.log("Store Created");
      }
    });
  }
}

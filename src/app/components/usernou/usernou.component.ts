import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {StoreService} from "../../services/api/store/store.service";
import {Location} from "@angular/common";
import {UserService} from "../../services/api/user/user.service";

@Component({
  selector: 'app-usernou',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './usernou.component.html',
  styleUrl: './usernou.component.css'
})
export class UsernouComponent {
  username: string = "";
  password: string = "";

  constructor(private userService: UserService, private _location: Location) {}

  createUser(redirectBack: boolean) {
    this.userService.createUser(this.username, this.password).subscribe({
      next: () => {
        console.log("User Created");
        if (redirectBack) {
          this._location.back();
        }
      }
    });
  }
}

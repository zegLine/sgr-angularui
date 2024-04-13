import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../../services/api/user/user.service";
import {Location} from "@angular/common";
import {RoleService} from "../../services/api/user/role.service";

@Component({
  selector: 'app-rolenou',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './rolenou.component.html',
  styleUrl: './rolenou.component.css'
})
export class RolenouComponent {

  name: string = "";

  constructor(private roleService: RoleService, private _location: Location) {}


  createRole(redirectBack: boolean) {
    this.roleService.createRole(this.name).subscribe({
      next: () => {
        console.log("Role Created");
        if (redirectBack) {
          this._location.back();
        }
      }
    });
  }
}

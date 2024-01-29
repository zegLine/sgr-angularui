import { Component } from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardTitle} from "@angular/material/card";
import { AuthServiceService } from "../auth-service.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatButton,
    MatLabel,
    MatCard,
    MatCardTitle,
    FormsModule,
    NgIf
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  constructor(private authService: AuthServiceService, private router: Router) {}
  login() {
    this.authService.login(this.username, this.password).then((loginResult) => {
      if (loginResult) {
        this.router.navigate(['/start']);
      } else {
        console.log('Login failed');
        this.errorMessage = 'Username or password incorrect';
      }
    });
  }
}

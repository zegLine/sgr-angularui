import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {AuthServiceService} from "../../services/auth-service/auth-service.service";
import {NgIf} from "@angular/common";
import {MatMenu, MatMenuItem, MatMenuTrigger} from "@angular/material/menu";
import {MatIconModule} from "@angular/material/icon";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButton,
    MatToolbar,
    RouterLink,
    NgIf,
    MatMenu,
    MatIconButton,
    MatMenuTrigger,
    MatIconModule,
    MatMenuItem
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(protected authService: AuthServiceService) {
  }
}

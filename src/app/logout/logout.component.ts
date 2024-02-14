import { Component } from '@angular/core';
import {AuthServiceService} from "../auth-service.service";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private authservice: AuthServiceService) {
    this.authservice.logOut();
  }
}

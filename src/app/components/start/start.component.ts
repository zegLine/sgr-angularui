import { Component } from '@angular/core';
import {MatCard, MatCardTitle} from "@angular/material/card";

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    MatCard,
    MatCardTitle
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbar } from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbar, MatButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}

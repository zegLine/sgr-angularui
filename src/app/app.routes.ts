import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {StartComponent} from "./start/start.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'start', component: StartComponent},
];

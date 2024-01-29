import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {StartComponent} from "./start/start.component";
import {LogoutComponent} from "./logout/logout.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'start', component: StartComponent},
  {path: '', redirectTo: '/start', pathMatch: "full"}
];

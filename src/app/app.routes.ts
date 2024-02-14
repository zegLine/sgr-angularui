import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {StartComponent} from "./start/start.component";
import {LogoutComponent} from "./logout/logout.component";
import {PretgarantieComponent} from "./pretgarantie/pretgarantie.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'start', component: StartComponent},
  {path: 'garantie/pret', component: PretgarantieComponent},
  {path: '', redirectTo: '/start', pathMatch: "full"}
];

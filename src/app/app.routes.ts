import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {StartComponent} from "./components/start/start.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {PretgarantieComponent} from "./components/pretgarantie/pretgarantie.component";
import {PretgarantienouComponent} from "./components/pretgarantienou/pretgarantienou.component";
import {StoreComponent} from "./components/store/store.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'start', component: StartComponent},
  {path: 'garantie/pret', component: PretgarantieComponent},
  {path: 'garantie/pret/nou', component: PretgarantienouComponent},
  {path: 'store', component: StoreComponent},
  {path: '', redirectTo: '/start', pathMatch: "full"}
];

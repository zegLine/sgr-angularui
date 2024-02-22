import { Routes } from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {StartComponent} from "./components/start/start.component";
import {LogoutComponent} from "./components/logout/logout.component";
import {PretgarantieComponent} from "./components/pretgarantie/pretgarantie.component";
import {PretgarantienouComponent} from "./components/pretgarantienou/pretgarantienou.component";
import {StoreComponent} from "./components/store/store.component";
import {StorenouComponent} from "./components/storenou/storenou.component";
import {PurchaseComponent} from "./components/purchase/purchase.component";
import {ItemComponent} from "./components/item/item.component";
import {ItemnouComponent} from "./components/itemnou/itemnou.component";

export const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {path: 'start', component: StartComponent},
  {path: 'garantie/pret', component: PretgarantieComponent},
  {path: 'garantie/pret/nou', component: PretgarantienouComponent},
  {path: 'store', component: StoreComponent},
  {path: 'store/nou', component: StorenouComponent},
  {path: 'purchase', component: PurchaseComponent},
  {path: 'item', component: ItemComponent},
  {path: 'item/nou', component: ItemnouComponent},
  {path: '', redirectTo: '/start', pathMatch: "full"}
];

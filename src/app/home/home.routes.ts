import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { TempelatesComponent } from "./tempelates/tempelates.component";
import { ViewCardComponent } from "./view-card/view-card.component";

export const HomeRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tempelates/:id', component: TempelatesComponent },
  { path: 'view-card/:uid/:tid', component:  ViewCardComponent}
];
import { Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { TempelatesComponent } from "./tempelates/tempelates.component";

export const HomeRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'tempelates/:id', component: TempelatesComponent }
];
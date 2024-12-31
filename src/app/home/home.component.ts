import { Component, ViewEncapsulation } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatToolbar } from '@angular/material/toolbar';
import { MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbar,
    MatToolbarRow,
    MatButton,
    MatDivider,
    RouterLink,
    CategoriesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {

}

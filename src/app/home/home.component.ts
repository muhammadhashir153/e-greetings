import { Component, ViewEncapsulation, OnInit  } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatToolbar } from '@angular/material/toolbar';
import { MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbar,
    MatToolbarRow,
    MatButton,
    MatDivider,
    RouterLink,
    CommonModule,
    CategoriesComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  isLoggedIn: boolean = false;
  username: string | null = null;

  ngOnInit() {
    // Check if the username is stored in localStorage
    this.username = localStorage.getItem('Name');
    this.isLoggedIn = !!this.username; 
  }
}

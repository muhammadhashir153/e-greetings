import { Component } from '@angular/core';
import { CategoryService } from 'src/app/APISERVICES/CategoryService';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})

export class CategoriesComponent {
  constructor(private categoryService: CategoryService){}

  categories: any[] = [];

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    });
  }
}

import { Component } from '@angular/core';
import { CategoryService } from 'src/app/APISERVICES/Categoryservice';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [NgFor],
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

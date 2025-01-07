import { Component } from '@angular/core';
import { CategoryService } from 'src/app/APISERVICES/CategoryService';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MaterialModule } from 'src/app/material.module';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MaterialModule, MatIconModule, MatMenuModule, MatButtonModule, NgFor],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {
  constructor (private catService : CategoryService){}
  categories :any[] = [];
  
  ngOnInit(): void{
    this.catService.getCategories().subscribe(data => {
      this.categories = data;
      console.log(this.categories);
    });
  }
}

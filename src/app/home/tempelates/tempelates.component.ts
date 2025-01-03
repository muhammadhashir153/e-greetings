import { Component, OnInit } from '@angular/core';
import { TempService } from 'src/app/APISERVICES/TempService';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/APISERVICES/CategoryService';

@Component({
  selector: 'app-tempelates',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tempelates.component.html',
  styleUrl: './tempelates.component.scss'
})
export class TempelatesComponent {
  constructor(private tempService: TempService, private catService: CategoryService, private activeRoute :ActivatedRoute) { }

  id :string | null = null;
  categoryName: string | null = null;
  catDesc: string | null = null;
  categories :any[] = [];
  templates :any[] = [];

  ngOnInit(): void {

    this.id = this.activeRoute.snapshot.paramMap.get('id');

    this.tempService.getService().subscribe(response => {
      this.categories = response;
      this.templates = this.categories.filter(category => category.categoryId == this.id);
    });

    this.catService.getCategories().subscribe(res => {
      this.categories = res;
      this.categories.filter(name => name.id == this.id);
      this.categoryName = this.categories[0].name;
      this.catDesc = this.categories[0].description;
      console.log(this.categoryName);
      console.log(this.catDesc);
    })
  }
}

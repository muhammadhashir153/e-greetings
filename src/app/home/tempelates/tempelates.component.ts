import { Component, OnInit } from '@angular/core';
import { TempService } from 'src/app/APISERVICES/TempService';
import { NgFor } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tempelates',
  standalone: true,
  imports: [NgFor],
  templateUrl: './tempelates.component.html',
  styleUrl: './tempelates.component.scss'
})
export class TempelatesComponent {
  constructor(private tempService: TempService, private activeRoute :ActivatedRoute) { }

  id :string | null = null;
  categories :any[] = [];
  templates :any[] = [];

  ngOnInit(): void {

    this.id = this.activeRoute.snapshot.paramMap.get('id');

    this.tempService.getService().subscribe(response => {
      this.categories = response;

      this.templates = this.categories.filter(category => category.categoryId == this.id);

      console.log(this.templates);
    });
  }
}

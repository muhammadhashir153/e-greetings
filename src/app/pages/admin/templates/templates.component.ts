import { Component } from '@angular/core';
import { MatCard } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatMenu } from '@angular/material/menu';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatCardContent } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { TempService } from 'src/app/APISERVICES/TempService';
import { NgFor } from '@angular/common';
import { MatTooltip } from '@angular/material/tooltip';




@Component({
  selector: 'app-templates',
  standalone: true,
  imports: [
    MatCard, 
    RouterLink,
    MatButtonModule, 
    MatIcon, 
    MatMenu, 
    MatMenuTrigger,
    MatCardContent,
    MatCardTitle,
    MatTableModule,
    NgFor,
    MatTooltip
  ],
  templateUrl: './templates.component.html',
  styleUrl: './templates.component.scss'
})
export class TemplatesComponent {
  templates: any[] = [];

  constructor(
    private tempService: TempService
  ){}

  ngOnInit(): void{
    this.tempService.getService().subscribe((data: any) => {
      this.templates = data;
    });
  }
}

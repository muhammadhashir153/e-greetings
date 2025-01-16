import { Component, ViewEncapsulation, OnInit  } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatToolbar } from '@angular/material/toolbar';
import { MatToolbarRow } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FeedbacksComponent } from './feedbacks/feedbacks.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatToolbar,
    MatToolbarRow,
    MatButton,
    MatDivider,w
    RouterLink,
    CommonModule,
    CategoriesComponent,
    HeaderComponent,
    FooterComponent,
    FeedbacksComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  islogedIn: boolean = false;

  ngOnInit():void{
    let user = sessionStorage.getItem("UserId");
    if(user != null){
      this.islogedIn = true;
    }
  }
}

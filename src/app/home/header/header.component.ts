import { Component, OnInit } from '@angular/core';
import { RouterLink, Router, RouterModule } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatDivider } from '@angular/material/divider';
import { MatToolbar } from '@angular/material/toolbar';
import { MatToolbarRow } from '@angular/material/toolbar';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { MatMenu } from '@angular/material/menu';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatMenuItem } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, MatButton, MatDivider, MatToolbar, MatToolbarRow, NgIf, CommonModule, MatMenu, MatMenuTrigger, MatMenuItem],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;
  username: string | null = null;
  userRole: string | null = '/profile'
  constructor(private router :Router){}

  ngOnInit() {
    // Check if the username is stored in localStorage
    this.username = sessionStorage.getItem('Name');
    this.isLoggedIn = !!this.username; 

    let userRole = sessionStorage.getItem("UserRole");
    if(userRole == "admin"){
      this.userRole = "/dashboard"
    }else{
      this.userRole = "/profile"
    }
  }

  logout():void{
    // Clear the username from localStorage
    sessionStorage.clear();
    this.isLoggedIn = false;
    this.router.navigate(['/']);
    window.location.reload();
  }
}

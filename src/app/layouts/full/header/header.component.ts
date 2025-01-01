import {
  Component,
  Output,
  EventEmitter,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
<<<<<<< HEAD
import { RouterModule } from '@angular/router';
=======
import { Router, RouterModule } from '@angular/router';
>>>>>>> 6733196678ea2099453b7ebbc7c4fe65cc34c1af
import { CommonModule } from '@angular/common';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule, NgScrollbarModule, MaterialModule, MatButtonModule],
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.None,
})

export class HeaderComponent {
  @Input() showToggle = true;
  @Input() toggleChecked = false;
  @Output() toggleMobileNav = new EventEmitter<void>();
  @Output() toggleCollapsed = new EventEmitter<void>();

<<<<<<< HEAD
  constructor() {}
=======
  constructor(private router: Router) {}


  logout() {
    // Remove the Role from localStorage
    localStorage.removeItem('Role');

    // Redirect to the login page
    this.router.navigate(['/authentication/login']);
  }
>>>>>>> 6733196678ea2099453b7ebbc7c4fe65cc34c1af
}

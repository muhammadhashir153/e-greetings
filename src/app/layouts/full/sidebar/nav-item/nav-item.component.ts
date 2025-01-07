import {
  Component,
  Input,
  OnChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { NavItem } from './nav-item';
import { Router } from '@angular/router';
import { NavService } from '../../../../services/nav.service';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from 'src/app/material.module';
import { CommonModule } from '@angular/common';
import { navItems } from '../sidebar-data';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  imports: [TranslateModule, MaterialModule, CommonModule],
  templateUrl: './nav-item.component.html',
  styleUrls: [],
})
export class AppNavItemComponent implements OnChanges {
  @Output() toggleMobileLink: any = new EventEmitter<void>();
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() item: NavItem | any;
  @Input() depth: any;

  filteredNavItems: NavItem[] = [];
  userRole: string | null = null;

  constructor(public navService: NavService, public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }

    // Get user role from localStorage
    
  }
  ngOnInit(): void{
    this.userRole = sessionStorage.getItem('Role'); // Example: 'admin' or 'user'
    this.filterNavItems();
    console.log(this.filteredNavItems.length);
    console.log('this shit is working 17 times');
  }
  ngOnChanges() {
    this.navService.currentUrl.subscribe((url: string) => {});
  }

  filterNavItems() {
    if (this.userRole) {
      this.filteredNavItems = navItems.filter(
        item => !item.roles || item.roles.includes(this.userRole as string)
      );
    } else {
      this.filteredNavItems = []; // No items if no role is found
    }
  }
  

  onItemSelected(item: NavItem) {
    this.router.navigate([item.route]);

    // Scroll to top
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }

  onSubItemSelected(item: NavItem) {
    // Handle sub-item selection logic here
  }
  
}

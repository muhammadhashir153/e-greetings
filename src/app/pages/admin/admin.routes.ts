import { Routes } from '@angular/router';

// ui
import { CategoriesComponent } from './categories/categories.component';
import { TemplatesComponent } from './templates/templates.component';

export const AdminRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'categories',
        component: CategoriesComponent,
      },
      {
        path: 'templates',
        component: TemplatesComponent,
      },
    ],
  },
];

import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { TemplatesComponent } from './templates/templates.component';
import { AddNewComponent } from './categories/add-new/add-new.component';

export const AdminRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'categories',
        loadChildren: () => 
          import('./categories/categories.routes').then((m)=> m.CategoryRoutes)
      },
      {
        path: 'templates',
        component: TemplatesComponent,
      },
    ],
  },
];

import { Routes } from '@angular/router';


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
        loadChildren: () =>
          import('./templates/templates.routes').then((m)=> m.TemplateRoutes)
      },
      {
        path: 'feedbacks',
        loadChildren: () =>
          import('./feedbacks/feedbacks.routes').then((m)=> m.FeedbackRoutes)
      },
    ],
  },
];

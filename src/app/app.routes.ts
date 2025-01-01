import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';

=======
import { AuthGuard } from './guards/auth.service';
import { DashboardGuard } from './guards/dashboard.service';
>>>>>>> 6733196678ea2099453b7ebbc7c4fe65cc34c1af

export const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
<<<<<<< HEAD
        redirectTo: '/dashboard',
=======
        redirectTo: '/authentication/login',
>>>>>>> 6733196678ea2099453b7ebbc7c4fe65cc34c1af
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
<<<<<<< HEAD
=======
        canActivate: [DashboardGuard],
>>>>>>> 6733196678ea2099453b7ebbc7c4fe65cc34c1af
      },
      {
        path: 'editor',
        loadChildren: () =>
          import('./pages/editor/editor.routes').then((m) => m.EditorRoutes),
      },
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./pages/ui-components/ui-components.routes').then(
            (m) => m.UiComponentsRoutes
          ),
      },
      {
        path: 'extra',
        loadChildren: () =>
          import('./pages/extra/extra.routes').then((m) => m.ExtraRoutes),
      },
    ],
  },
  {
<<<<<<< HEAD
    path: 'home',
    component: HomeComponent,
  },
  {
=======
>>>>>>> 6733196678ea2099453b7ebbc7c4fe65cc34c1af
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
<<<<<<< HEAD
=======
          canActivate: [AuthGuard],
>>>>>>> 6733196678ea2099453b7ebbc7c4fe65cc34c1af
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];

import { Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { AuthGuard } from './guards/auth.service';
import { DashboardGuard } from './guards/dashboard.service';
import { HomeComponent } from './home/home.component';
import { TempelatesComponent } from './home/tempelates/tempelates.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home/tempelates/:id',
    component: TempelatesComponent
  },
  {
    path: '',
    component: FullComponent,
    canActivate: [DashboardGuard],
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./pages/pages.routes').then((m) => m.PagesRoutes),
      },
      {
        path: 'editor/:id',
        loadChildren: () =>
          import('./pages/editor/editor.routes').then((m) => m.EditorRoutes),
      },

      {
        path: 'profile',
        loadChildren: () =>
          import('./pages/profile/profile.routes').then((m) => m.ProfileRoutes),
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
      {
        path: 'admin',
        loadChildren: () => 
          import('./pages/admin/admin.routes').then((m) => m.AdminRoutes),
      }
    ],
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.routes').then(
            (m) => m.AuthenticationRoutes
          ),
          canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'authentication/error',
  },
];

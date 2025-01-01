import { Routes } from '@angular/router';
import { StarterComponent } from './starter/starter.component';
import { EditorComponent } from './editor/editor.component';

export const PagesRoutes: Routes = [
  {
    path: '',
    component: StarterComponent,
    data: {
      title: 'Starter',
      urls: [
        { title: 'Dashboard', url: '/dashboard' },
        { title: 'Starter' },
      ],
    },
  },
  {
    path: 'editor',
    component: EditorComponent,
    data: {
      title: 'Editor',
      urls: [
        // { title: 'Dashboard', url: '/dashboard' },
        // { title: 'Editor' },
      ],
    },
  }
];

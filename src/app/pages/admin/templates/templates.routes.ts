import { Routes } from '@angular/router';
import { TemplatesComponent } from './templates.component';
import { AddNewComponent } from './add-new/add-new.component';
import { UpdateComponent } from './update/update.component';

export const TemplateRoutes: Routes = [
    {
        path: '',
        component: TemplatesComponent,
    },
    {
        path: 'add-new',
        component: AddNewComponent
    },
    {
        path: 'update',
        component: UpdateComponent
    },
    
];

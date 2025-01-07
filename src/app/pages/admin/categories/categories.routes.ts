import { Routes } from '@angular/router';
import { CategoriesComponent } from './categories.component';
import { AddNewComponent } from './add-new/add-new.component';
import { UpdateComponent } from './update/update.component';

export const CategoryRoutes: Routes = [
    {
        path: '',
        component: CategoriesComponent,
    },
    {
        path: 'add-new',
        component: AddNewComponent
    },
    {
        path: 'update/:id',
        component: UpdateComponent
    }
];

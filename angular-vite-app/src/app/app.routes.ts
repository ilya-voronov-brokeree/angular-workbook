import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about.page';
import { InitialPageComponent } from './pages/initial/initial.page';
import { NotFoundComponent } from './sharedModule/components/not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: InitialPageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'todos',
    loadChildren: () => import('./todoModule/todo.module').then(m => m.TodoModule)
  },
  {
    path: 'forms',
    loadChildren: () => import('./formsModule/forms.module').then(m => m.FormsModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./clientModule/client.module').then(m => m.ClientModule)
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

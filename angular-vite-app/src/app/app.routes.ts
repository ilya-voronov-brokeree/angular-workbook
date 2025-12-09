import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about.page';
import { InitialPageComponent } from './pages/initial/initial.page';

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
    path: '**',
    redirectTo: ''
  }
];

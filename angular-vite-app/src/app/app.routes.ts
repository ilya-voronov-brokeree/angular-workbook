import { Routes } from '@angular/router';
import { AboutPageComponent } from './pages/about/about.page';
import { InitialPageComponent } from './pages/initial/initial.page';
import { TodoPageComponent } from './todoModule/todo.page';

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
    component: TodoPageComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

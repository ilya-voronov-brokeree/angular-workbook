import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RESOLUTION_TOKEN } from '../commonModule/resolution.token';
import { SharedModule } from '../sharedModule/shared.module';
import { TodoDetailPageComponent } from './pages/todo-detail/todo-detail.page';
import { TodoPageComponent } from './pages/todo/todo.page';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { todoGuard } from './todo.guard';
import { TodoResolutionService } from './todo-resolution.service';

const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent
  },
  {
    path: ':index',
    component: TodoDetailPageComponent,
    canActivate: [todoGuard]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [TodoPageComponent, TodoTableComponent, TodoDetailPageComponent],
  providers: [
    {
      provide: RESOLUTION_TOKEN,
      useClass: TodoResolutionService
    }
  ]
})
export class TodoModule {}


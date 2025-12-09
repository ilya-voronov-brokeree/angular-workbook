import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RESOLUTION_TOKEN } from '../commonModule/resolution.token';
import { SharedModule } from '../sharedModule/shared.module';
import { TodoPageComponent } from './todo.page';
import { TodoTableComponent } from './components/todo-table/todo-table.component';
import { TodoResolutionService } from './todo-resolution.service';

const routes: Routes = [
  {
    path: '',
    component: TodoPageComponent
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [TodoPageComponent, TodoTableComponent],
  providers: [
    {
      provide: RESOLUTION_TOKEN,
      useClass: TodoResolutionService
    }
  ]
})
export class TodoModule {}


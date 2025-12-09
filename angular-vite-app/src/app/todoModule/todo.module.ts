import { NgModule } from '@angular/core';
import { SharedModule } from '../sharedModule/shared.module';
import { TodoPageComponent } from './todo.page';
import { TodoTableComponent } from './components/todo-table/todo-table.component';

@NgModule({
  imports: [SharedModule],
  declarations: [TodoPageComponent, TodoTableComponent]
})
export class TodoModule {}


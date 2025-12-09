import { Component, Input } from '@angular/core';
import { FormsTodo } from '../../forms-todo.model';

@Component({
  selector: 'app-forms-todo-table',
  standalone: false,
  templateUrl: './forms-todo-table.component.html',
  styleUrls: ['./forms-todo-table.component.scss']
})
export class FormsTodoTableComponent {
  @Input() todos: FormsTodo[] = [];
}


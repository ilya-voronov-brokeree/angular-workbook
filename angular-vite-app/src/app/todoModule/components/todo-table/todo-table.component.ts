import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-table',
  standalone: false,
  templateUrl: './todo-table.component.html',
  styleUrls: ['./todo-table.component.scss']
})
export class TodoTableComponent {
  @Input() todos: Todo[] = [];
  @Input() page = 1;
  @Input() pageSize = 5;
  @Input() totalCount = 0;
  @Output() pageChange = new EventEmitter<number>();

  get totalPages(): number {
    return Math.max(1, Math.ceil(this.totalCount / this.pageSize));
  }

  prev(): void {
    if (this.page > 1) this.pageChange.emit(this.page - 1);
  }

  next(): void {
    if (this.page < this.totalPages) this.pageChange.emit(this.page + 1);
  }
}


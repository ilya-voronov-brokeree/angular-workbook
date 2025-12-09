import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-detail-page',
  standalone: false,
  templateUrl: './todo-detail.page.html',
  styleUrls: ['./todo-detail.page.scss']
})
export class TodoDetailPageComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly todoService = inject(TodoService);

  readonly todo: Todo;
  readonly index: number;

  constructor() {
    const index = Number(this.route.snapshot.paramMap.get('index'));
    const todos = this.todoService.load();
    if (isNaN(index) || index < 0 || index >= todos.length) {
      this.router.navigate(['/not-found']);
      this.todo = {} as Todo;
      this.index = -1;
      return;
    }
    this.index = index;
    this.todo = todos[index];
  }

  goBack(): void {
    this.router.navigate(['/todos']);
  }
}


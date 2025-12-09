import { Component, computed, inject, signal } from '@angular/core';
import { Router } from '@angular/router';
import { Resolution } from '../../../commonModule/resolution.interface';
import { RESOLUTION_TOKEN } from '../../../commonModule/resolution.token';
import { TodoService } from '../../todo.service';
import { Todo } from '../../todo.model';

@Component({
  selector: 'app-todo-page',
  standalone: false,
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss']
})
export class TodoPageComponent {
  private readonly pageSize = 5;
  private readonly todosState = signal<Todo[]>([]);
  readonly page = signal(1);
  readonly title = signal('');
  readonly viewTodoIndex = signal<number | null>(null);
  private readonly resolution = inject<Resolution>(RESOLUTION_TOKEN);
  private readonly router = inject(Router);

  readonly count = computed(() => this.todosState().length);
  readonly pagedTodos = computed(() => {
    const start = (this.page() - 1) * this.pageSize;
    return this.todosState().slice(start, start + this.pageSize);
  });

  readonly resolutionValue = this.resolution.getValue();

  constructor(private readonly service: TodoService) {
    this.todosState.set(this.service.load());
  }

  addTodo(): void {
    const text = this.title().trim();
    if (!text) return;
    const next: Todo = {
      id: Date.now(),
      title: text,
      completed: false,
      createdAt: Date.now()
    };
    const updated = [next, ...this.todosState()];
    this.todosState.set(updated);
    this.service.save(updated);
    this.title.set('');
    this.page.set(1);
  }

  setPage(next: number): void {
    this.page.set(next);
  }

  setViewTodoIndex(value: string | number | null): void {
    if (value === null || value === '') {
      this.viewTodoIndex.set(null);
    } else {
      const num = typeof value === 'string' ? Number(value) : value;
      this.viewTodoIndex.set(isNaN(num) ? null : num);
    }
  }

  viewTodo(): void {
    const index = this.viewTodoIndex();
    if (index !== null && !isNaN(index) && index >= 0) {
      this.router.navigate(['/todos', index]);
    }
  }
}


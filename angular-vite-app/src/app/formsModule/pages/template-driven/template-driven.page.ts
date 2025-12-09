import { Component, inject, signal } from '@angular/core';
import { FormsTodoService } from '../../forms-todo.service';
import { FormsTodo } from '../../forms-todo.model';

@Component({
  selector: 'app-template-driven-page',
  standalone: false,
  templateUrl: './template-driven.page.html',
  styleUrls: ['./template-driven.page.scss']
})
export class TemplateDrivenPageComponent {
  private readonly service = inject(FormsTodoService);
  readonly todos = signal<FormsTodo[]>([]);
  
  description = '';
  dueDate = '';

  constructor() {
    this.loadTodos();
  }

  onSubmit(form: any): void {
    if (form.valid) {
      const todo: FormsTodo = {
        id: Date.now(),
        description: this.description,
        dueDate: this.dueDate,
        createdAt: Date.now()
      };
      this.service.add(todo);
      this.description = '';
      this.dueDate = '';
      form.reset();
      this.loadTodos();
    }
  }

  private loadTodos(): void {
    this.todos.set(this.service.load());
  }
}


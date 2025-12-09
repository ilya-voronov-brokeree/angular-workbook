import { Component, inject, signal } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsTodoService } from '../../forms-todo.service';
import { FormsTodo } from '../../forms-todo.model';

@Component({
  selector: 'app-reactive-page',
  standalone: false,
  templateUrl: './reactive.page.html',
  styleUrls: ['./reactive.page.scss']
})
export class ReactivePageComponent {
  private readonly fb = inject(FormBuilder);
  private readonly service = inject(FormsTodoService);
  readonly todos = signal<FormsTodo[]>([]);

  readonly todoForm: FormGroup = this.fb.group({
    description: ['', Validators.required],
    dueDate: ['', Validators.required]
  });

  constructor() {
    this.loadTodos();
  }

  onSubmit(): void {
    if (this.todoForm.valid) {
      const formValue = this.todoForm.value;
      const todo: FormsTodo = {
        id: Date.now(),
        description: formValue.description,
        dueDate: formValue.dueDate,
        createdAt: Date.now()
      };
      this.service.add(todo);
      this.todoForm.reset();
      this.loadTodos();
    }
  }

  private loadTodos(): void {
    this.todos.set(this.service.load());
  }
}


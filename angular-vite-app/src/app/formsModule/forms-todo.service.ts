import { Injectable } from '@angular/core';
import { FormsTodo } from './forms-todo.model';

const STORAGE_KEY = 'forms-todos';

@Injectable({ providedIn: 'root' })
export class FormsTodoService {
  private storage: Storage | null = typeof localStorage !== 'undefined' ? localStorage : null;

  load(): FormsTodo[] {
    if (!this.storage) return [];
    const raw = this.storage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw) as FormsTodo[];
    } catch {
      return [];
    }
  }

  save(todos: FormsTodo[]): void {
    if (!this.storage) return;
    this.storage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }

  add(todo: FormsTodo): void {
    const todos = this.load();
    todos.push(todo);
    this.save(todos);
  }
}


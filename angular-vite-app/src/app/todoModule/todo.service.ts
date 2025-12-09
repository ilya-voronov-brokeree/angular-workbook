import { inject, Injectable } from '@angular/core';
import { Todo } from './todo.model';

const STORAGE_KEY = 'todos';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private storage: Storage | null = typeof localStorage !== 'undefined' ? localStorage : null;

  load(): Todo[] {
    if (!this.storage) return [];
    const raw = this.storage.getItem(STORAGE_KEY);
    if (!raw) return [];
    try {
      return JSON.parse(raw) as Todo[];
    } catch {
      return [];
    }
  }

  save(todos: Todo[]): void {
    if (!this.storage) return;
    this.storage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }
}


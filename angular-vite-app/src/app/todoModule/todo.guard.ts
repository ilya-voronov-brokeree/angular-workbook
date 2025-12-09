import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { TodoService } from './todo.service';

export const todoGuard: CanActivateFn = (route) => {
  const todoService = inject(TodoService);
  const router = inject(Router);
  const index = Number(route.paramMap.get('index'));

  if (isNaN(index) || index < 0) {
    return router.createUrlTree(['/not-found']);
  }

  const todos = todoService.load();
  if (index >= todos.length) {
    return router.createUrlTree(['/not-found']);
  }

  return true;
};


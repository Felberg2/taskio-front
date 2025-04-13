import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'tasks',
        loadComponent: () =>
          import('./features/tasks/pages/tasks-page/tasks-page.component').then(m => m.TasksPageComponent)
      },
      {
        path: '',
        redirectTo: 'tasks',
        pathMatch: 'full'
      }
];

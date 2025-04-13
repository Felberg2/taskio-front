import { Component, Input } from '@angular/core';
import { Task } from '../../../../models/task.model';
import { CommonModule } from '@angular/common';
import { Status } from '../../../../core/enums/status.enum';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];

  getStatusColor(status: Status): string {
    switch (status) {
      case Status.ToDo: return '#fef08a';       // amarelo
      case Status.Doing: return '#bfdbfe';      // azul claro
      case Status.Done: return '#bbf7d0';       // verde claro
      case Status.Canceled: return '#fca5a5';   // vermelho claro
      default: return '#f3f4f6';                // cinza
    }
  }
}

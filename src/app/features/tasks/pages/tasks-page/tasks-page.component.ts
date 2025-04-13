// tasks-page.component.ts
import { Component } from '@angular/core';
import { TaskListComponent } from '../../components/task-list/task-list.component';
import { TaskFormComponent } from '../../components/task-form/task-form.component';
import { Task } from '../../../../models/task.model';
import { v4 as uuidv4 } from 'uuid';
import { TasksService } from '../../../../core/services/tasks.service';
import { StatusLabels } from '../../../../shared/status-label';
import { Status } from '../../../../core/enums/status.enum';

@Component({
  selector: 'app-tasks-page',
  standalone: true,
  imports: [TaskListComponent, TaskFormComponent],
  templateUrl: './tasks-page.component.html',
})
export class TasksPageComponent {
  statusLabels = StatusLabels;
  tasks: Task[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit() {
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAll().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  addTask(task: Partial<Task>) {
    this.taskService.create(task).subscribe(() => {
      this.loadTasks();
    });
  }

  getStatusLabel(status: number): number {
    return status as Status;
  }
}

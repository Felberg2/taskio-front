import { Component, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../../models/task.model';
import { FormsModule } from '@angular/forms';
import { Status } from '../../../../core/enums/status.enum';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-form.component.html',
})
export class TaskFormComponent {
  name = '';
  description = '';
  status: Status = 0;

  @Output() create = new EventEmitter<Omit<Task, 'id'>>();

  submit() {
    this.create.emit({
      name: this.name,
      description: this.description,
      status: this.status,
    });
    this.name = '';
    this.description = '';
    this.status = 0;
  }
}

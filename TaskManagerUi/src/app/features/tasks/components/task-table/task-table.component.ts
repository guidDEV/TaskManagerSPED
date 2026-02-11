import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';

import { TaskItem} from '../../models/task.model';
import { StatusBadgeComponent} from '../status-badge/status-badge.component';

@Component({
  selector: 'app-task-table',
  standalone: true,
  imports: [
    DatePipe,
    StatusBadgeComponent
  ],
  templateUrl: './task-table.component.html'
})
export class TaskTableComponent {

  @Input() tasks: TaskItem[] = [];

  @Output() edit = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  onEdit(id: number) {
    this.edit.emit(id);
  }

  onDelete(id: number) {
    this.delete.emit(id);
  }
}

import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DatePipe } from '@angular/common';

import { TaskService} from '../../../../core/services/task.service';
import { TaskItem } from '../../models/task.model';
import {TaskTableComponent} from '../../components/task-table/task-table.component';
import {StatusBadgeComponent} from '../../components/status-badge/status-badge.component';


@Component({
  selector: 'app-task-list',
  standalone: true,

  imports: [
    RouterModule,
    DatePipe,
    TaskTableComponent,
    StatusBadgeComponent
  ],

  templateUrl: './task-list.component.html'
})
export class TaskListComponent {

  private taskService = inject(TaskService);
  private router = inject(Router);

  tasks: TaskItem[] = [];

  ngOnInit() {
    this.load();
  }

  load() {
    this.taskService.getAll()
      .subscribe(res => this.tasks = res);
  }

  edit(id: number) {
    this.router.navigate(['/edit', id]);
  }

  delete(id: number) {
    const confirmed = confirm('Delete this task?');

    if (!confirmed) return;

    this.taskService.delete(id)
      .subscribe(() => this.load());
  }
}

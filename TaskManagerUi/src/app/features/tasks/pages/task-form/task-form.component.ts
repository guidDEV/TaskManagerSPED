import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TaskService} from '../../../../core/services/task.service';
import { TaskItem, TaskStatus } from '../../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-form.component.html'
})
export class TaskFormComponent {

  private taskService = inject(TaskService);
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  isEdit = false;

  statuses: TaskStatus[] = ['Pending', 'InProgress', 'Completed'];

  task: Partial<TaskItem> = {
    title: '',
    description: '',
    status: 'Pending'
  };

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.isEdit = true;

      this.taskService.getById(+id)
        .subscribe(res => this.task = res);
    }
  }

  save() {
    if (this.isEdit) {
      this.taskService.update(this.task.id!, this.task)
        .subscribe(() => this.router.navigate(['/']));
    }
    else {
      this.taskService.create(this.task as any)
        .subscribe(() => this.router.navigate(['/']));
    }
  }

  cancel() {
    this.router.navigate(['/']);
  }
}

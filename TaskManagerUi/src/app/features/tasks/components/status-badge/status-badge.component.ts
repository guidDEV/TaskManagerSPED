import { Component, Input } from '@angular/core';
import { TaskStatus } from '../../models/task.model';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-status-badge',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './status-badge.component.html'
})
export class StatusBadgeComponent {
  @Input() status!: TaskStatus;
}

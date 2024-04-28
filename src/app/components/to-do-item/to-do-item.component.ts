import { Component, Input } from '@angular/core';
import { Task } from 'src/app/modals/task.modal';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.scss']
})
export class ToDoItemComponent {
  @Input() task: Task = {
    id: 0, name: '', checked: false
  }

  updateTask() {
    this.task.checked = !this.task.checked;
  }
}

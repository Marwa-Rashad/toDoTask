import { Component } from '@angular/core';
import { Task } from 'src/app/modals/task.modal';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent {
  tasks: Task[] = [
    { id: 1, name: 'list1', checked: true },
    { id: 2, name: 'list2', checked: false }
  ];

  addItem(item: any) {
    this.tasks.push(
      { id: this.tasks.length + 1, name: item, checked: false }
    )


  }

}

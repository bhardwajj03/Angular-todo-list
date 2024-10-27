import { Component, Input } from '@angular/core';
import { Todo } from '../../Todo';
import { TodoItemComponent } from "../../todo-item/todo-item.component";

@Component({
  selector: 'app-todos',
  standalone: true,
  imports: [TodoItemComponent],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  @Input() todo:Todo;
  todos:Todo[]=[];
  constructor(){}
}

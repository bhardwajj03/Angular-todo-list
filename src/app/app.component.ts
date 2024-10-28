import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodosComponent } from "./myComponents/todos/todos.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodosComponent,app-reactiveform],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list';
}

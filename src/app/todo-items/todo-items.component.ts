import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models/todo.item';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  todoItem: TodoItem = {
    id: 1,
    name: "Call Joe",
    isComplete: false
  }

  constructor() { }

  ngOnInit(): void {
  }

}

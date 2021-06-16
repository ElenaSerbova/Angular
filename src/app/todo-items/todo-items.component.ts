import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models/todo.item';
import { ITEMS } from '../mock-todo-items';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  styles = {
    'color' : 'red',
    'font-size': '0.8em'
  }

  items: TodoItem[] = ITEMS; 
  
  car : any;

  constructor() { }

  ngOnInit(): void {
  }

}

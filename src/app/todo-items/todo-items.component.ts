import { Component, OnInit } from '@angular/core';
import { TodoItem } from '../models/todo.item';
import { ITEMS } from '../mock-todo-items';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {  

  summaryColor = 'red';
  todoImgUri = './assets/todo.png'

  items: TodoItem[] = ITEMS; 
  selectedItem: TodoItem | undefined; 

  constructor() { }

  onSelect(todo: TodoItem, event: MouseEvent) : void{
      this.selectedItem = todo;
      console.log(event);
  }

  ngOnInit(): void {
  }

}

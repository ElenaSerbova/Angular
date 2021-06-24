import { Component, OnInit, Optional } from '@angular/core';
import { TodoItem } from '../models/todo.item';
import { LogService } from '../services/log.service';
import { TodoService } from '../services/todo-service';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css'],
  providers:[]
})
export class TodoItemsComponent implements OnInit {  

  summaryColor = 'red';
  todoImgUri = './assets/todo.png'

  items: TodoItem[] = []; 
  selectedItem?: TodoItem; 

  constructor( private todoService: TodoService, @Optional() private logService: LogService) { }

  onSelect(todo: TodoItem, event: MouseEvent) : void{
      this.selectedItem = todo;
      console.log(event);
  }

  ngOnInit(): void {
      this.todoService.getTodos().subscribe(items => {
        this.items = items;

        if(this.logService){
          this.logService.write(JSON.stringify(items));
        }

      });
  }

}

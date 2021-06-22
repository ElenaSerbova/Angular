import { Component, OnInit, Input} from '@angular/core';
import { TodoItem } from '../models/todo.item';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Input() todo?: TodoItem;

  constructor() { }

  ngOnInit(): void {
  }

}

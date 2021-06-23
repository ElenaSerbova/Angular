import { Component, OnInit} from '@angular/core';
import { TodoItem } from '../models/todo.item';
import { TodoService } from '../services/todo-service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  todo?: TodoItem;
  id: number = -1;

  constructor(
    private todoService: TodoService, 
    private activateRoute: ActivatedRoute,
    private router: Router) 
  { 
    activateRoute.params.subscribe(params => this.id = params['id']);
  }

  onSaveClick()
  {
    console.log(this.todo);
    if(this.todo !== undefined){
      
      this.todoService
      .updateTodo(this.todo)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/todos']);
      });
    }
  }

  ngOnInit(): void {
      this.todoService.getTodo(this.id).subscribe(todo => this.todo = todo);
  }


}

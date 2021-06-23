import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesTestComponentComponent } from './pipes-test-component/pipes-test-component.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

const routes: Routes = [
  {path: 'todos', component: TodoItemsComponent},
  {path: 'todos/edit/:id', component: TodoFormComponent},
  {path: 'pipes', component: PipesTestComponentComponent}
];


@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

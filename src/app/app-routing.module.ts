import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesTestComponentComponent } from './pipes-test-component/pipes-test-component.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';

const routes: Routes = [
  {path: 'todos', component: TodoItemsComponent},
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

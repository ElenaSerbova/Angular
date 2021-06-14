import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { PipesTestComponentComponent } from './pipes-test-component/pipes-test-component.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemsComponent,
    PipesTestComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

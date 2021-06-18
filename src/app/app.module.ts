import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

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
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

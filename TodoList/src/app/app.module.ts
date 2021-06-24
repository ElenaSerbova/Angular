import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { PipesTestComponentComponent } from './pipes-test-component/pipes-test-component.component';
import { TodoFormComponent } from './todo-form/todo-form.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoService } from './services/todo-service';
import { LogService } from './services/log.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemsComponent,
    PipesTestComponentComponent,
    TodoFormComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [TodoService, LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

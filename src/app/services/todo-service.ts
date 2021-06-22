import { Injectable } from "@angular/core";
import { ITEMS } from "../mock-todo-items"; 
import { TodoItem } from "../models/todo.item";

@Injectable({
    providedIn: 'root'
})
export class TodoService{

    getTodos() : TodoItem[] {
        return ITEMS;
    }

}
import { Injectable } from "@angular/core";
import { TodoItem } from "../models/todo.item";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from "rxjs"; 

@Injectable({
    providedIn: 'root'
})
export class TodoService{

    private baseUrl = 'http://localhost:56691/api/todo';

    constructor(private http: HttpClient){

    }

    getTodos() : Observable<TodoItem[]> {
        return this.http.get<TodoItem[]>(this.baseUrl);
    }

    getTodo(id: number) : Observable<TodoItem>{
        const url = `${this.baseUrl}/Details/${id}`;

        return this.http.get<TodoItem>(url);
    }

    updateTodo(todo: TodoItem) : Observable<TodoItem>{
       
        const url = `${this.baseUrl}/Edit/${todo.id}`;
        console.log(url);
        
        return this.http.put<TodoItem>(url, todo);
    }

}
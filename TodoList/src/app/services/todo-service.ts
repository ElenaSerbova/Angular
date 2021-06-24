import { Injectable, Optional } from "@angular/core";
import { TodoItem } from "../models/todo.item";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Observable, of } from "rxjs"; 
import { AppRoutingModule } from "../app-routing.module";
import { LogService } from "./log.service";

@Injectable({
    providedIn: "root"
})
export class TodoService{

    private baseUrl = 'http://localhost:56691/api/todo';

    constructor(private http: HttpClient, @Optional() private logService: LogService){

    }

    getTodos() : Observable<TodoItem[]> {
        return this.http.get<TodoItem[]>(this.baseUrl);
    }

    getTodo(id: number) : Observable<TodoItem>{
        const url = `${this.baseUrl}/Details/${id}`;
        this.logService?.write(url);

        return this.http.get<TodoItem>(url);
    }

    updateTodo(todo: TodoItem) : Observable<TodoItem>{
       
        const url = `${this.baseUrl}/Edit/${todo.id}`;
        this.logService?.write(url);
        
        return this.http.put<TodoItem>(url, todo);
    }

}
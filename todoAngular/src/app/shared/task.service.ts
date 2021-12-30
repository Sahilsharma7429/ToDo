import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import {  Observable } from 'rxjs';

import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  selectedTask!: Task;
  tasks!: Task[];
  base_url = 'http://localhost:4000/tasks';
  constructor(private http: HttpClient) { }



getAllTodo() {
  return this.http.get<Task[]>(this.base_url)  
}

postTodo(todo: Task){
 return this.http.post<Task[]>(this.base_url, todo)
}
deleteTodo(id: string){
return this.http.delete(this.base_url + `/${id}`);
}

putTodo(todo:Task){
  return this.http.put(this.base_url + `/${todo._id}`,todo);
}
}

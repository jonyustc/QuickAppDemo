import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { ToDo } from '../models/to-do';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  appUrl = '';
  constructor(private _http: HttpClient,  @Inject('BASE_URL') baseUrl: string) {
      this.appUrl = baseUrl;
   }

   getAllTasks() {
     return this._http.get<ToDo[]>(this.appUrl + 'api/ToDo');
   }

   getTask(id: number) {
     return this._http.get(this.appUrl + 'api/ToDo/' + id).pipe(map(response => response));
   }

   addTodoTask(toDo: ToDo) {
     return this._http.post(this.appUrl + 'api/ToDo', toDo).pipe(map(response => response));
   }

   UpdateTodoTask(toDo: ToDo) {
    return this._http.put(this.appUrl + 'api/ToDo', toDo).pipe(map(response => response));
  }

  DeleteToDoTask(id: number) {
    return this._http.delete(this.appUrl + 'api/ToDo/' + id).pipe(map(response => response));
  }
}

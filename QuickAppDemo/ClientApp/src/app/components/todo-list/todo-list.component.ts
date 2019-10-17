import { ToDo } from 'src/app/models/to-do';
import { ToDoService } from './../../services/to-do.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  public todoList$ = this.todoListService.getAllTasks();
  constructor(private todoListService:ToDoService) { }

  ngOnInit() {
  }

  public deleteTodo(id: number) {
    this.todoListService.DeleteToDoTask(id);
  }

  public setTodoForEdit(todoItem: ToDo) {
    this.todoListService.UpdateTodoTask(todoItem);
  }

  public todoItemEdit(todoItem: ToDo) {
    this.todoListService.UpdateTodoTask(todoItem);
  }

  public trackByFn(index, item) {
    return item.id;
  }

}

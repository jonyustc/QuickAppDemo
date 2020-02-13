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
  todoItem:any;
  // tslint:disable-next-line: no-unused-expression
  public selectedListForEdit$ = new ToDo();
  constructor(private todoListService:ToDoService) { }

  ngOnInit() {
    // this.selectedListForEdit$=todoItem;
    this.todoListService.getTask(1).subscribe((data:ToDo)=>{
      console.log(data);
    });
  }

  public deleteTodo(id: number) {
    this.todoListService.DeleteToDoTask(id);
  }

  public setTodoForEdit(todoItem: ToDo) {
    console.log(this.selectedListForEdit$);
    this.selectedListForEdit$ = todoItem;
  }

  public todoItemEdit(todoItem: ToDo) {
      this.todoListService.getTask(todoItem.id);
    // this.todoListService.UpdateTodoTask(todoItem);
  }

  public updatetoDo(todoItem: ToDo){
    this.todoListService.UpdateTodoTask(todoItem).subscribe(res=>{
        console.log('updated');
    });
  }

  public trackByFn(index, item) {
    return item.id;
  }

}

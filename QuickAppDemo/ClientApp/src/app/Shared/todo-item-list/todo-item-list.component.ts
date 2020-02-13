import { ToDo } from './../../models/to-do';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-item-list',
  templateUrl: './todo-item-list.component.html',
  styleUrls: ['./todo-item-list.component.css']
})
export class TodoItemListComponent implements OnInit {

  @Input() public todoItem: ToDo;
  @Input() public readOnlyTODO: boolean;
  @Output() public todoDelete = new EventEmitter();
  @Output() public todoEdit = new EventEmitter<ToDo>();
  @Output() public todoComplete = new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit() {
  }

  public completeClick() {
    const newTodo = {
      ...this.todoItem,
      completed: !this.todoItem.IsCompleted
    };

    this.todoComplete.emit(newTodo);
  }

  public deleteClick() {
    this.todoDelete.emit(this.todoItem.id);
  }

  public editClick() {
    this.todoEdit.emit(this.todoItem);
  }

}

import { ToDo } from './../../models/to-do';
import { Component, OnInit, Input, Output, EventEmitter, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-todo-item-card',
  templateUrl: './todo-item-card.component.html',
  styleUrls: ['./todo-item-card.component.css']
})
export class TodoItemCardComponent implements OnInit {
  @Input() public todoItem: ToDo;
  @Input() public readOnlyTODO: boolean;
  @Output() public todoDelete = new EventEmitter<number>();
  @Output() public todoEdit = new EventEmitter<ToDo>();

  
  constructor() { }

  ngOnInit() {
  }

  public completeClick() {
    this.todoItem.IsCompleted = !this.todoItem.IsCompleted;
  }

  public deleteClick() {
    this.todoDelete.emit(this.todoItem.id);
  }

  public editClick() {
    this.todoEdit.emit(this.todoItem);
  }

}

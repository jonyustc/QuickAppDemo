import { ToDo } from './../../../models/to-do';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {


  @Input() currentToDo: ToDo;
  @Output() todoUpdate = new EventEmitter<ToDo>();

  // @Output() editToDo =new EventEmitter<ToDo>();

  constructor() { }

  ngOnInit() {
  }

  onTaskUpdate(){
    this.todoUpdate.emit(this.currentToDo);
  }



}

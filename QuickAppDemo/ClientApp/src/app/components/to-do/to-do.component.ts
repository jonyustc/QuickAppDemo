import { ToDoService } from './../../services/to-do.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {BsModalService, BsModalRef} from 'ngx-bootstrap/modal';
import { ToDo } from 'src/app/models/to-do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {
  modalRef: BsModalRef;
  taskList: ToDo[];
  columns = [];
  taskEdit: any;
  model = new ToDo();

  @ViewChild('template2', {static: false})
  template2: TemplateRef<any>;

  @ViewChild('statusHeaderTemplate', {static: false})
  statusHeaderTemplate: TemplateRef<any>;

  @ViewChild('statusTemplate', {static: false})
  statusTemplate: TemplateRef<any>;

  constructor(private todoService: ToDoService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
    this.getAllTask();

    this.columns = [
      { prop : 'completed', name: '', width: 30, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate},
      { prop : 'task', name: 'Task'},
      { prop : 'description', name: 'Description'},
      { prop : 'isImportant', name: 'Is Important' }
    ];
  }

  getAllTask() {
    this.todoService.getAllTasks().subscribe(
      data => {
        this.taskList = data;
      });
  }

  editTask(id: number) {
    this.todoService.getTask(id).subscribe(
      data => {
        this.taskEdit = data;
        console.log(this.taskEdit);
        this.modalRef = this.modalService.show(this.template2);
      }
    );
  }

  deleteTask(id: number) {
    if (confirm('Are you sure want to delete?')) {
      this.todoService.DeleteToDoTask(id).subscribe(
        data => {
          this.getAllTask();
        }
      );
    }
  }


  onTaskSubmit() {
    this.todoService.addTodoTask(this.model).subscribe(
      (res) => {
        console.log('Created');
        this.modalRef.hide();
        this.getAllTask();
      }
    );
  }

  onTaskUpdate() {
    this.todoService.UpdateTodoTask(this.taskEdit).subscribe(
      (res) => {
        console.log('Updated');
        this.modalRef.hide();
        this.getAllTask();
      }
    );
  }

  // tslint:disable-next-line: member-ordering
  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  // tslint:disable-next-line: member-ordering
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

}

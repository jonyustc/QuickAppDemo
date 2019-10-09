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

  @ViewChild('statusHeaderTemplate', {static: true})
  statusHeaderTemplate: TemplateRef<any>;

  @ViewChild('statusTemplate', {static: true})
  statusTemplate: TemplateRef<any>;

  constructor(private todoService: ToDoService, private modalService: BsModalService) { }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {

    // this.fetch((data) => {
    //   this.rows = data;
    // });

    this.getAllTask();

    this.columns = [
      { prop : 'isCompleted', name: '', width: 30, headerTemplate: this.statusHeaderTemplate, cellTemplate: this.statusTemplate},
      { prop : 'task', name: 'Task'},
      { prop : 'description', name: 'Description'},
      { prop : 'isImportant', name: 'Is Important' }
    ];
  }


  fetch(cb) {
    let data = this.getAllTask();

    if (data == null) {
        setTimeout(() => {

            data = this.getAllTask();

            if (data == null) {
                data = [
                    { 'isCompleted': true, 'isImportant': true, 'task': 'Create visual studio extension', 'description': 'Create a visual studio VSIX extension package that will add this project as an aspnet-core project template' },
                    { 'isCompleted': false, 'isImportant': true, 'task': 'Do a quick how-to writeup', 'description': '' },
                    {
                        'isCompleted': false, 'isImportant': false, 'task': 'Create aspnet-core/angular7 tutorials based on this project', 'description': 'Create tutorials (blog/video/youtube) on how to build applications (full stack)' +
                            ' using aspnet-core/angular7. The tutorial will focus on getting productive with the technology right away rather than the details on how and why they work so audience can get onboard quickly.'
                    },
                ];
            }

            cb(data);
        }, 1000);
    } else {
        cb(data);
    }
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

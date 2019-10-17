import { Component, OnInit,Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() public tableRef: TemplateRef<any>;
  @Input() public data: any;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.css']
})
export class AppChildComponent implements OnInit {

  @Output() valueChange = new EventEmitter();
  counter = 0;

  constructor() { }

  ngOnInit() {
  }

  handleClick() {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
  }

}

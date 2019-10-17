import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'color-sample',
  templateUrl: './code-sample.component.html',
  styleUrls: ['./code-sample.component.css']
})
export class CodeSampleComponent implements OnInit {

  @Input() color;
  constructor() { }

  ngOnInit() {
  }

}

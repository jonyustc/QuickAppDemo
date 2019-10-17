import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'color-me',
  templateUrl: './color-me.component.html',
  styleUrls: ['./color-me.component.css']
})
export class ColorMeComponent implements OnInit {
  @Input() colors;
  constructor() { }

  ngOnInit() {
  }

}

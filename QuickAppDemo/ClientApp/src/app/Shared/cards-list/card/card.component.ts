import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() public cardRef: TemplateRef<any>;
  @Input() public data: any;
  constructor() { }

  ngOnInit() {
  }

}

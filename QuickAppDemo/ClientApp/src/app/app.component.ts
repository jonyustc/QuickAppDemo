// import { ColorMeComponent } from './components/color-me/color-me.component';
import { Component, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { CodeSampleComponent } from './components/code-sample/code-sample.component';
import { ColorPickerDirective } from 'ngx-color-picker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  displayCounter(count) {
    console.log(count);
  }
}

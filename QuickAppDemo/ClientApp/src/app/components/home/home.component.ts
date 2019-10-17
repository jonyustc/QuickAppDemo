import { Component, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef, OnInit } from '@angular/core';
import { CodeSampleComponent } from '../code-sample/code-sample.component';
import { ColorPickerDirective } from 'ngx-color-picker';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements AfterViewInit {

  @ViewChild(CodeSampleComponent, { static: true })
  primarySampleComponent: CodeSampleComponent;

  @ViewChild('primaryColorSample', {read: ElementRef, static: true})
  primarySampleDiv: ElementRef;

  @ViewChild('primaryInput', {static: true})
  primaryInput: ElementRef;

  @ViewChild('primaryInput', {read: ColorPickerDirective, static: true})
  colorPickerDirective: ColorPickerDirective;

  @ViewChild('template', {static: true})
  template: ElementRef;

  primary = '#1976d2';
  mycolor = '#2976d2';

  logintext='Login';
  signuptext='Signup';
  lession=['Lession 1','Lession 2'];


  login(){
    console.log('login');
  }

  signup(){
    console.log('signup');
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');

    console.log('primaryColorSample:', this.primarySampleComponent);

    console.log('primarySampleDiv:', this.primarySampleDiv.nativeElement);

    console.log('primaryInput:', this.primaryInput.nativeElement);

    console.log('template:', this.template);
  }

  openColorPicker() {
    this.colorPickerDirective.openDialog();
  }

}

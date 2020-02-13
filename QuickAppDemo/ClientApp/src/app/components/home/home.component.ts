import { Observable } from 'rxjs/Observable';
import { Component, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef, OnInit, Input } from '@angular/core';
import { CodeSampleComponent } from '../code-sample/code-sample.component';
import { ColorPickerDirective } from 'ngx-color-picker';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  myObservableSub:Subscription;

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
  totalEstimate=10;

  ctx={estimate:this.totalEstimate};

  login(){
    console.log('login');
  }

  signup(){
    console.log('signup');
  }

  ngOnInit() {
    // console.log('Values on ngAfterViewInit():');

    // console.log('primaryColorSample:', this.primarySampleComponent);

    // console.log('primarySampleDiv:', this.primarySampleDiv.nativeElement);

    // console.log('primaryInput:', this.primaryInput.nativeElement);

    // console.log('template:', this.template);

    const myNumbers = interval(1000);

    // var observable=Observable.create((observer:string)=>{
    //     observer.next('observer 1 call');
    // });

    this.myObservableSub = myNumbers.subscribe((number:number)=> {
      console.log(number);
      
    });



  }

  ngOnDestroy(){
    this.myObservableSub.unsubscribe();
  }

  openColorPicker() {
    this.colorPickerDirective.openDialog();
  }

}
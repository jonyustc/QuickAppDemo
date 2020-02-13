import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';
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

  /**
   *
   */
  constructor(private authService:AuthService,private router:Router) {
    this.checkLogin();
    
  }

  isShowLoginPage=false;

  checkLogin(){
    debugger;
    if(this.authService.isAutherticate()){
      this.isShowLoginPage=true;
    }
  }

  displayCounter(count) {
    console.log(count);
  }
}

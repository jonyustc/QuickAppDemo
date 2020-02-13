import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { LoginService } from './../../services/login.service';
import { Login } from './../../models/login';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error:string;
  loginModel=new Login();
  constructor(private loginSerice:LoginService,private authSerice:AuthService, private router:Router) { }

  ngOnInit() {
  }

  onLogin(loginForm:NgForm){
    if(loginForm.valid) {
      this.authSerice.login(loginForm.value.UserName,loginForm.value.Password).subscribe((res:any)=>{
        this.router.navigate(['/todo-list']);
      }, error => {
        this.error = 'Unable to login.UserName or Password Wrong!';
      });
    }
  }

  

}

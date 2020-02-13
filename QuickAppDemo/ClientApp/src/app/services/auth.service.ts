import { HttpClient } from '@angular/common/http';
import { Login, LoginResponse } from './../models/login';
import { map } from 'rxjs/operators';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Login | null;

  private isLoggedIn=false;
  public redirectUrl:string;

  constructor(private router:Router,private http:HttpClient) {
    debugger;
    this.isLoggedIn = !!localStorage.getItem('username');

   }

  login(username:string,password:string){
    var data={
      userName:username,
      password:password
    }
    return this.http.get<LoginResponse>('api/Login', {params: data}).pipe(map(res =>{
      this.isLoggedIn=true; 
      localStorage.setItem('username',res.user_name);
      return res;
    }));
  }


  // login(userName, password) {
  //   const headers = new Headers();
  //   headers.append('Content-Type', 'application/json');

  //   return this.http
  //     .post(
  //       'api/Login',
  //     JSON.stringify({ userName, password }),{ headers }
  //     )
  //     .map(res => res.json())
  //     .map(res => {
  //       localStorage.setItem('username', res.userName);
  //       this.isLoggedIn = true;
  //       return true;
  //     });
  // }

  isAutherticate(){
    return this.isLoggedIn;
  }

  logout(){
    this.isLoggedIn=false;
    localStorage.removeItem('username');
    return this.http.get('api/logout').pipe(map(res=>res));
      
  }

}

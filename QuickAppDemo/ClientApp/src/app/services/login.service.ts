import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  // tslint:disable-next-line: whitespace
  getLoginInfo(username:string,password:string) {
    debugger;
    var data={
      userName:username,
      password:password
    }
    return this.http.get('api/Login', {params: data, withCredentials: true}).pipe(map(res => res));
  }
}

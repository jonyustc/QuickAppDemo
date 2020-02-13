import { Registration } from './../models/registration';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  registerUser(registration: Registration){
    return this.http.post('api/Registration', registration).pipe(map(res => res));
  }

}

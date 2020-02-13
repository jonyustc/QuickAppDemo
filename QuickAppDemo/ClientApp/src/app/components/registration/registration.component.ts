import { RegistrationService } from './../../services/registration.service';
import { Observable } from 'rxjs/observable';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Registration } from 'src/app/models/registration';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private fb: FormBuilder,
              private registerService: RegistrationService
    ) {

    this.registrationForm = this.fb.group({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl('', Validators.required),
        email: new FormControl('', Validators.required),
        userName: new FormControl('', [Validators.required, Validators.minLength(4)]),
        password: new FormControl('', Validators.required),
        country: new FormControl('')
    });

   }

  ngOnInit() {
  }

  onRegister() {
    const controls = this.registrationForm.controls;
    // console.log(controls);
    // console.log(Object.keys(controls));

    if (this.registrationForm.invalid) {
      Object.keys(controls).forEach(function(controlName){
        controls[controlName].markAllAsTouched();
      });
      return;
    }

    const register = new Registration();
    register.firstName = controls.firstName.value;
    register.lastName = controls.lastName.value;
    register.email = controls.email.value;
    register.userName = controls.userName.value;
    register.password = controls.password.value;
    register.country = controls.country.value;

    this.registerService.registerUser(register).subscribe(res => {
      console.log(res);
    });
  }

  isControlHasError(controlName: string, validationType: string): boolean {
    // console.log(this.registrationForm);
    const control = this.registrationForm.controls[controlName];

    const result = control.hasError(validationType) && (control.dirty || control.touched);
    return result;
  }

}

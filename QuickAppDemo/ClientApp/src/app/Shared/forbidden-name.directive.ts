import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, Validator, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appForbiddenName]',
  // providers:[{Validators:NG_VALIDATORS,useExisting:forbiddenNameVAlidator,multi:true}]
})
export class ForbiddenNameDirective{
  // @Input('appForbiddenName') forbiddenName:string;
  // constructor() { }

  // validate(control:AbstractControl):{[key:string]:any} | null {
  //   return this.forbiddenName ? forbiddenNameVAlidator(new RegExp(this.forbiddenName,'i'))(control):null;
  // }

  // export function forbiddenNameVAlidator(nameRe:RegExp):ValidatorFn {
  //   return (control:AbstractControl):{[key:string]:any} | null=>{
  //     const forbidden=nameRe.test(control.value);
  //     return forbidden ? {'forbiddenName' : {value:control.value}} : null;
  //   };
  // }

}
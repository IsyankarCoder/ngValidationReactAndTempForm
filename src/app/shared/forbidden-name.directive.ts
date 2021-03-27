import { NullTemplateVisitor } from '@angular/compiler';
import {Directive,Input} from '@angular/core';
import {AbstractControl,NG_VALIDATORS,ValidationErrors,Validator,ValidatorFn} from '@angular/forms';


/* A heros name cannt match the given regular expression*/
export function forbiddenNameValidator(nameReg:RegExp):ValidatorFn{   
     return (control:AbstractControl):{[key:string]:any} | null =>{
         const forbidden = nameReg.test(control.value);
         return  forbidden ? {forbiddenName:{value:control.value}}:null;
     };
}


@Directive({
 selector:'[appForbiddenName]',
 providers:[{
    provide:NG_VALIDATORS,useExisting:ForbiddenValidatorDirective,multi:true
 }]
})
export class ForbiddenValidatorDirective implements Validator{
   @Input('appForbiddenName') forbiddenName:string="";
   validate(control:AbstractControl):ValidationErrors |null{
        return  this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName,'i'))(control):null;
   }
}
import {Component, OnInit} from '@angular/core';
import {FormGroup,FormArray,FormControl,FormBuilder,ValidatorFn,Validators,Validator} from '@angular/forms';


@Component({
    selector:"app-test-formgroup",
    templateUrl:'./test-form-group.component.html',
    styleUrls:['./test-form-group.component.css']
})
export class TestFormGroupComponent implements OnInit{
    title ="app";
    powers=["Relly Smart","Super Flexible","Weather Changer"];
    hero = {name:"Dr.", alterEgo:"Dr. What" ,power:this.powers[0]};

    exampleForm:FormGroup;

    constructor(private fb:FormBuilder){
       this.exampleForm = new FormGroup({
            firstname: new FormControl(this.hero.name,Validators.required),
            lastname: new FormControl(this.hero.alterEgo,Validators.required),
            power: new FormControl(this.hero.power,Validators.required),
            alias: new FormArray([new FormControl("")])
          });
    }

    ngOnInit(){

    }

    addNewAlias (){
        this.aliases.push(this.fb.control(""));
    }

    get aliases(){
        return this.exampleForm.get("alias") as FormArray;
    }


    get firstName (){
         return this.exampleForm.get("firstname")?.value;
    }

    get lastName(){
        return this.exampleForm.get("lastname")?.value;
    }

    get Power(){
        return this.exampleForm.get("power")?.value;
    }
}
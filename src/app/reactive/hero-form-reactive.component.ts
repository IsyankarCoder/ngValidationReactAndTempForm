import {Component,OnInit, SimpleChange} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import {forbiddenNameValidator} from '../shared/forbidden-name.directive';
import{UniqueAlterEgoValidator} from '../shared/alter-ego.directive';
import { identityRevealedValidator } from '../shared/identity-revealed.directive';
 
@Component({
    selector:"app-hero-form-reactive",    
    templateUrl:"./hero-form-reactive.component.html",
    styleUrls:['./hero-form-reactive.component.css'],
})
export class HeroComponentReactiveForm implements OnInit{
    powers=["Relly Smart","Super Flexible","Weather Changer"];
    hero = {name:"Dr.", alterEgo:"Dr. What" , power:this.powers[0]};
    heroForm:FormGroup;

    changeLog = [];
    constructor(private alterEgoValidator: UniqueAlterEgoValidator){
        this.heroForm = new FormGroup({
            name: new FormControl(this.hero.name,[Validators.required,Validators.minLength(4),forbiddenNameValidator(/bob/i)]),
            alterEgo: new FormControl(this.hero.alterEgo,{asyncValidators:[this.alterEgoValidator.validate.bind(this.alterEgoValidator)],updateOn:'blur'}),
            power: new FormControl(this.hero.power,Validators.required)         
         },{validators:identityRevealedValidator}); 
    }
 
    ngOnInit():void{ 
      
    } 

    get power(){
    return this.heroForm.get('power');
    }
    get name() { return this.heroForm.get('name')}

    get alterEgo(){
    return this.heroForm.get('alterEgo');
    }

    get FormErrors(){
         return this.heroForm.errors;
    }
}
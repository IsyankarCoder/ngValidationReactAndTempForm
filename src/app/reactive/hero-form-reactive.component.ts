import {Component,OnInit} from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
    selector:"app-hero-form-reactive",    
    templateUrl:"./hero-form-reactive.component.html",
    styleUrls:['./hero-form-reactive.component.css'],
})
export class HeroComponentReactiveForm implements OnInit{
    powers=["Relly Smart","Super Flexible","Weather Changer"];
    hero = {name:"Dr.", alterEgo:"Dr. What" ,power:this.powers[0]};

    heroForm:FormGroup =  new FormGroup({
        name: new FormControl(this.hero.name,[Validators.required,Validators.minLength(4)]),
        alterEgo: new FormControl(this.hero.alterEgo),
        power: new FormControl(this.hero.power,Validators.required)         
     });

    constructor(){
    
    }

    ngOnInit():void{ 
    } 

    get power(){
    return this.heroForm.get('power');
    }
    get name2() { return this.heroForm.get('name')}

    get alterEgo(){
    return this.heroForm?.get('alterEgo');
    }
}
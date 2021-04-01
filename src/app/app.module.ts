import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {AppComponent } from './app.component';
import {HeroComponentReactiveForm} from './reactive/hero-form-reactive.component';
import {HeroFormTemplateComponent} from './template/hero-form.template.component';
import {IdentityRevealedValidatorDirective} from './shared/identity-revealed.directive';
import {UniqueAlterEgoValidatorDirective} from './shared/alter-ego.directive';
import {ForbiddenValidatorDirective} from './shared/forbidden-name.directive';
import{TestFormGroupComponent} from './TestFormGroup/test-form-group.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponentReactiveForm,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    ForbiddenValidatorDirective,
    HeroFormTemplateComponent,
    TestFormGroupComponent
  ],
  imports: [
    FormsModule,ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

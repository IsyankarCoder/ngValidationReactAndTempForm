import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import {AppComponent } from './app.component';
import {HeroComponentReactiveForm} from './reactive/hero-form-reactive.component'

@NgModule({
  declarations: [
    AppComponent,
    HeroComponentReactiveForm
  ],
  imports: [
    FormsModule,ReactiveFormsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

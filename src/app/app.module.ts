import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ttClassDirective } from './tt-class.directive';
import { HightLine } from './hight-line.directive';
import { LightDirective } from './light.directive';
import { ColorDirective } from './color.directive';


@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ttClassDirective, 
    HightLine, LightDirective, ColorDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

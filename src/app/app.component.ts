import { Component, DoCheck } from '@angular/core';
import { HightLine } from './hight-line.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements DoCheck{
  title = 'app';
  color = 'yellow';

  ngDoCheck(){
    console.log(this.color);
  }

}

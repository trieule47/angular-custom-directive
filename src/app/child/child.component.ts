import { Component, OnInit } from '@angular/core';
import { ttClassDirective } from '../tt-class.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  // providers: [ttClassDirective]
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Directive, ElementRef, Input, OnChanges, OnInit } from '@angular/core';

@Directive({
  selector: '[appColor]'
})

export class ColorDirective implements OnChanges, OnInit {
  constructor(private e: ElementRef) { }

  @Input('appcolor') color = 'red';

  ngOnInit() {
    this.e.nativeElement.style.color = this.color;
  }
  
  ngOnChanges() {
    console.log('directive');
    console.log(this.color);
    this.e.nativeElement.style.color = this.color;
  }

}

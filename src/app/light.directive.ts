import { Directive, Input } from '@angular/core';
import { ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appLight]'
})
export class LightDirective implements OnInit {

  @Input() text;
  constructor(private e: ElementRef) { }

  ngOnInit(): void {
    if(this.text) {
      this.e.nativeElement.textContent = this.text.toUpperCase();
    }
  }

  

}

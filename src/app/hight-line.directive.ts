import { Directive, OnInit, Input, ElementRef, Component, HostListener } from "@angular/core";

@Directive({
    selector: '[hightLine]'
})

export class HightLine {
    @Input() color = 'red';
    constructor(private el: ElementRef){
        // this.el.nativeElement.style.color = "yellow";
        // this.el.nativeElement.style.background = "green";
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highLine(this.color || 'yellow');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highLine('');
    }

    highLine(color:string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
    
}
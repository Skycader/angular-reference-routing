import { Directive, ElementRef, HostBinding, HostListener, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnChanges {

  @Input('appColor') color: string = 'black'
  @Input('borderColor') color2: string = 'black'
  @Input('object') object: {fontSize?: string, backgroundColor?: string}
  clicks = 0
  constructor(
    readonly el: ElementRef,
    readonly r: Renderer2
  ) { 
    console.log("COLOR2: ", this.color2)
    this.r.setStyle(this.el.nativeElement,'border','2px solid ' + this.color2)
    
  }

  @HostBinding('style.padding') padding: string = "0px"

  @HostListener('click', ['$event']) onClick(event: Event) {
    console.log(event, this.clicks++)
  }

  @HostListener('click', ['$event.target']) onClick2(target: HTMLElement) {
    console.log('target: ', target)
  }

  @HostListener('mouseenter') onEnter() {
    this.padding = "50px"
    this.r.setStyle(this.el.nativeElement, 'color',this.color)
    this.r.setStyle(this.el.nativeElement, 'background-color',this.object.backgroundColor)
  }

  @HostListener('mouseleave') onLeave() {
    this.padding = null
    this.r.setStyle(this.el.nativeElement, 'color',null)
    this.r.setStyle(this.el.nativeElement, 'background-color',null)

  }
  
  ngOnChanges() {
    // this.r.setStyle(this.el.nativeElement,'color',this.color)
    // this.r.setStyle(this.el.nativeElement,'border','2px solid ' + this.color2)
  }
}

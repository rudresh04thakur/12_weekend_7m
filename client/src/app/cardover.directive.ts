import {
  Directive, HostListener, ElementRef, TemplateRef,
  ViewContainerRef, Renderer2, Inject
} from '@angular/core';
import * as $ from 'jquery';
import { DOCUMENT } from '@angular/platform-browser';

@Directive({
  selector: '[appCardover]'
})
export class CardoverDirective {
  constructor(private _el: ElementRef, private _vc: ViewContainerRef,
    private renderer: Renderer2, @Inject(DOCUMENT) private document) {}

  @HostListener('mouseover') onMouseOver() {
    $(this._el.nativeElement).css({ "border": "1px solid black", "color": "red" })
  }
  counter=0;
  @HostListener('mouseleave') onMouseOut() {
    $(this._el.nativeElement).css({ "border": "none", "color": "black" })
    $(this._el.nativeElement).children('.remove').remove();
    this.counter = 0;
  }
  @HostListener('click') onClick() {
    // let child = this.renderer.createElement('a');
    // child.setAttribute("class", "remove")
    // child.style.display="block";
    // child.href="https://google.com"
    // child.innerHTML = "Read More.."+this._el.nativeElement.offsetHeight
    // this.renderer.appendChild(this._el.nativeElement, child);

    if (this.counter == 0) {
      $(this._el.nativeElement).append("<a class='remove' href='https://google.com'>Read More...</a>")
      this.counter++;
    }
    //this._vc.createEmbeddedView(this._tl)
  }
}

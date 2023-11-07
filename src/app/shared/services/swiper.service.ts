import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SwiperService {

  private swiperElement!: ElementRef;

  constructor() { }

  setElement(el: ElementRef): void {
    this.swiperElement = el;
  }

  initSwiper(): void{
    
    const swiperParams = {
      slidesPerView: 1,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1500,
      },
      
    };
  
    Object.assign(this.swiperElement.nativeElement, swiperParams);
    this.swiperElement.nativeElement.initialize();
  }
}

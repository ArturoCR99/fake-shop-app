import { Component, ElementRef, Input, ViewChild, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements AfterViewInit {

  //OuterParams

  @Input() elements: [] = [];
  @Input() numSlides: number = 1;
  @ViewChild('swiperContainer') swiperEl!: ElementRef<any>;

  constructor() { }

  ngAfterViewInit() {

    const swiperParams = {
      slidesPerView: this.numSlides,
      grabCursor: true
    };

    Object.assign(this.swiperEl.nativeElement, swiperParams);
    this.swiperEl.nativeElement.init;
  }
}

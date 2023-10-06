import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle'

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { CarouselComponent } from './components/carousel/carousel.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, CarouselComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent, CarouselComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {

  constructor(){
    register();
  }
  
 }

import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { register } from 'swiper/element/bundle'

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { CategoriesComponent } from './components/header/components/categories/categories.component';
import { UserComponent } from './components/header/components/user/user.component';
import { CartComponent } from './components/header/components/cart/cart.component';
import { LogoComponent } from './components/header/components/logo/logo.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchComponent, CategoriesComponent, UserComponent, CartComponent, LogoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {

  constructor() {
    register();
  }

}

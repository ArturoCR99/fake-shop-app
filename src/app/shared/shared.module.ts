import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'ng-click-outside';

import { register } from 'swiper/element/bundle'

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/header/components/search/search.component';
import { CategoriesComponent } from './components/header/components/categories/categories.component';
import { LogoComponent } from './components/header/components/logo/logo.component';
import { UserMenuComponent } from './components/header/components/user-menu/user-menu.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SearchComponent, CategoriesComponent,  LogoComponent, UserMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
    ClickOutsideModule
  ],
  exports: [HeaderComponent, FooterComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {

  constructor() {
    register();
  }

}

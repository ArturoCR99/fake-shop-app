import { Component, inject } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //Services
  private _headerService = inject(HeaderService);

  //Props
  public categories: [] = [];

  constructor(){

    this._headerService.getAllCategories().subscribe({
      next: (res) => this.categories = res,
      error: (err) => console.error(err),
      complete: () => console.log(this.categories)
    });

  }
}

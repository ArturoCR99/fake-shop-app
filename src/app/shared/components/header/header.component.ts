import { Component, inject } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  //Services
  private _categoriesService = inject(CategoriesService);

  //Props
  public categories: [] = [];

  constructor() {

    this._categoriesService.getAllSubCategories().subscribe({
      next: (res) => this.categories = res,
      error: (err) => console.error(err)
    });

    this._categoriesService.sortCategories().subscribe();

  }
}

import { Component, inject, OnInit } from '@angular/core';

import { CategoriesService } from './services/categories.service';
import { Category } from '../../interfaces/category';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _categoriesService = inject(CategoriesService);

  public categories: Category[] = [];
  public subCategories: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this._categoriesService.getAllCategories().subscribe((res: Category[]) => this.categories = res);
  }

}

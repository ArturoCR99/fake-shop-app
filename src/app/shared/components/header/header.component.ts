import { Component, inject, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { Category } from '../../interfaces/category';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private _categoriesService = inject(CategoriesService);
  public headerCategories: Category[] = [];

  constructor() { }

  ngOnInit(): void {
    this._categoriesService.getAllCategories().subscribe((res) => this.headerCategories = res);
  }

}

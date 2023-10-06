import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map, of } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  private _http = inject(HttpClient);
  public categories: Category[] = [
    {
      category: "mens",
      subCategories: ["mens-shirts", "men-shoes", "men-watches"]
    },
    {
      category: "womens",
      subCategories: ["womens-bags", "womens-watches", "womens-dresses", "womens-shoes", "womens-jewellery", "tops"]
    },
    {
      category: "accesories",
      subCategories: ["sunglasses"]
    },
    {
      category: "electronics",
      subCategories: ["smartphones", "laptops"]
    },
    {
      category: "home",
      subCategories: ["furniture", "lighting", "home-decoration"]
    },
    {
      category: "selfCare",
      subCategories: ["skin-care", "fragrances"]
    },
    {
      category: "food",
      subCategories: ["groceries"]
    }
  ]

  getAllCategories(): Observable<Category[]> {
    return of(this.categories);
  }

}

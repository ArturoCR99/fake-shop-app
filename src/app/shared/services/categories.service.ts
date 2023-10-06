import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {
  private _http = inject(HttpClient);

  constructor() { }

  getAllSubCategories(): Observable<[]> {
    return this._http.get<[]>("https://dummyjson.com/products/categories");
  }

  sortCategories(): Observable<any> {

    const definitions = [
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


    return this._http.get<any>("https://dummyjson.com/products/categories")
  }
}

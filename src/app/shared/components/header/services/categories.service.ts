import { Injectable, } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from 'src/app/shared/interfaces/category';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService {

  public categories: Category[] = [
    {
      category: "mens",
      image: "",
      subCategories: ["mens-shirts", "mens-shoes", "mens-watches"]
    },
    {
      category: "womens",
      image: "",
      subCategories: ["womens-bags", "womens-watches", "womens-dresses", "womens-shoes", "womens-jewellery", "tops"]
    },
    {
      category: "accesories",
      image: "",
      subCategories: ["sunglasses"]
    },
    {
      category: "electronics",
      image: "",
      subCategories: ["smartphones", "laptops"]
    },
    {
      category: "home",
      image: "",
      subCategories: ["furniture", "lighting", "home-decoration"]
    },
    {
      category: "selfCare",
      image: "",
      subCategories: ["skincare", "fragrances"]
    },
    {
      category: "food",
      image: "",
      subCategories: ["groceries"]
    }
  ]

  getAllCategories(): Observable<Category[]> {
    return of(this.categories);
  }
}

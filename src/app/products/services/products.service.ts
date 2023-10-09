import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, map } from 'rxjs';
import { Product } from '../interfaces/product';
import { Results } from '../interfaces/results';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private _http = inject(HttpClient);

  constructor() { }

  getProductById(id: number): Observable<Product>{
    return this._http.get<Product>(`https://dummyjson.com/products/${id}`).pipe(delay(400));
  }

  getProducts(category: string): Observable<Results>{
    return this._http.get<Results>(`https://dummyjson.com/products/category/${category}`).pipe(delay(500));
  }

  getSearchProducts(q: string): Observable<Results> {
    return this._http.get<Results>(`https://dummyjson.com/products/search?q=${q}&limit=100`).pipe(delay(500));
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  private _http = inject(HttpClient);

  constructor() { }

  getAllCategories(): Observable<any>{
    return this._http.get<any>("https://dummyjson.com/products/categories");
  }

}

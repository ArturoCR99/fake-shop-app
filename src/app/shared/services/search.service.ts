import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Results } from 'src/app/products/interfaces/results';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  
  private _http = inject(HttpClient);
  
  constructor() { }

  getSearchResults(q: string, limit: string): Observable<Results>{
    return this._http.get<Results>(`https://dummyjson.com/products/search?q=${q}&limit=${limit}`);
  }
}

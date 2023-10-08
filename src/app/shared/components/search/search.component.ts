import { Component, inject } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { Observable, Subscription, finalize, map } from 'rxjs';
import { Product } from 'src/app/products/interfaces/product';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private _searchService = inject(SearchService);
  public isLoading = false;
  public results$!: Observable<Product[]>;


  constructor() { }

  search(value: string) {

    this.isLoading = true;

    this.results$ = this._searchService.getSearchResults(value, "10").pipe(
      map((e) => { return e.products }),
      finalize(() => this.isLoading = false
      ));
  }

  search
}

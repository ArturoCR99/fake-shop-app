import { Component, inject } from '@angular/core';
import { Observable, Subscription, finalize, map } from 'rxjs';
import { Product } from 'src/app/products/interfaces/product';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  private router = inject(Router);
  private _searchService = inject(SearchService);
  public isLoading = false;
  public results$!: Observable<Product[]>;
  public showBox: boolean = false;


  constructor() { }

  onSearch(value: string) {

    this.isLoading = true;
    this.showBox = true;

    if (value.trim() == '') {
      this.showBox = false;
    }


    this.results$ = this._searchService.getSearchResults(value, "10").pipe(
      map((e) => { return e.products }),
      finalize(() => this.isLoading = false
      ));

  }

  search(value: string) {

    if (value.trim() == "") {
      return;
    }
    this.router.navigateByUrl('/products/category/search/' + value).then(() => {
      window.location.reload();
    });

  }

  onClickedOutside(e: Event) {
    this.showBox = false;
  }

  navigate(subCat: string, id: number) {
    this.router.navigateByUrl(`/products/detail/${subCat}/${id}`).then(() => {
      window.location.reload();
    })

  }
}

import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { finalize } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private _route = inject(ActivatedRoute);
  private _productsService = inject(ProductsService);

  public cat: string = "";
  public subCat: string = "";
  public products: Product[] = [];
  public results: number = 0;
  public page: number = 1;
  public sort: string = "";
  public isLoading = false;

  constructor() {
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe((param: ParamMap) => {
      this.cat = param.get('cat')!;
      this.subCat = param.get('subcat')!

      if (this.cat == "search") {
        return this.getProductsSearch(this.subCat);
      }

      this.getProductsCategory(this.subCat);
      this.page = 1;
    });
  }

  getProductsCategory(value: string) {
    this.isLoading = true;
    this._productsService.getProducts(value).pipe(
      finalize(() => { this.isLoading = false }
      )).subscribe((e) => {
        this.products = e.products;
        this.results = e.total;
      })
  }

  getProductsSearch(value: string) {
    this.isLoading = true;
    this._productsService.getSearchProducts(value).pipe(
      finalize(() => { this.isLoading = false }
      )).subscribe((e) => {
        this.products = e.products;
        this.results = e.total;
      })
  }

  onSort(sort: Event) {
    this.sort = (sort.target as HTMLInputElement).value;
  }

}

import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Params, Router } from '@angular/router';
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
  private _router = inject(Router);
  private _productsService = inject(ProductsService);

  public cat: string = "";
  public subCat: string = "";
  public products: Product[] = [];
  public results: number = 0;
  public page: number = 1;
  public sort: string = "default";
  public optionsSort: string[] = ["default", "highest price", "lowest price"];
  public isLoading = false;

  @ViewChild('viewSort') selectSort!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {

    //For Params
    this._route.paramMap.subscribe((params: ParamMap) => {
      this.cat = params.get('cat')!;
      this.subCat = params.get('subcat')!;

      if (this.cat == "search") {
        return this.getProductsSearch(this.subCat);
      }

      this.getProductsCategory(this.subCat);
    });

    //For Query Params
    this._route.queryParams.subscribe((params: Params) => {
      this.page = params['page'];
      this.sort = params['sort'];
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

  onSort(s: Event) {
    this._router.navigate([], { queryParams: { sort: (s.target as HTMLInputElement).value }, queryParamsHandling: 'merge' });
  }

  pc(e: number) {
    this._router.navigate([], { queryParams: { page: e }, queryParamsHandling: 'merge' }).then((_) => {
      window.location.reload();
    })
  }
}

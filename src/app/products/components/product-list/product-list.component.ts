import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../interfaces/product';
import { finalize, map } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  private route = inject(ActivatedRoute);
  private productsService = inject(ProductsService);

  cat: string = "";
  products: Product[] = [];
  results: number = 0;
  page: number = 1;
  sort: string = "";
  isLoading = false;

  constructor() {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.cat = param.get('subcat')!
      this.getProducts();
      this.page = 1;
    });
  }

  getProducts() {
    this.isLoading = true;
    this.productsService.getProducts(this.cat).pipe(
      finalize(() => { this.isLoading = false }
      )).subscribe((e) => {
        this.products = e.products;
        this.results = e.total;
      })
  }

  sortChange(sort: Event) {
    this.sort = (sort.target as HTMLInputElement).value;
  }

}

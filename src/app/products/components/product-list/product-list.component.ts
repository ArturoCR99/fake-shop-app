import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../interfaces/product';

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

  constructor() {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.cat = param.get('subcat')!
      this.getProducts();
    });
  }

  getProducts(){
    this.productsService.getProducts(this.cat).subscribe((e)=> {
      this.products = e.products;
      this.results = e.total;
    });
  }

}

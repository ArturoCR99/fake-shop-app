import { Component, ElementRef, OnInit, AfterViewInit, inject, ViewChild } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { finalize } from 'rxjs';

import { ProductsService } from '../../services/products.service';
import { CartService } from 'src/app/shared/services/cart.service';

import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  //Services
  private _productsService = inject(ProductsService);
  private _route = inject(ActivatedRoute);
  private _cart = inject(CartService);

  //Props
  public id!: number;
  public product!: Product;
  public isLoading: boolean = false;

  //DOM
  @ViewChild('swiper') public swiper!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id')!;
      this.getProduct(this.id);
    })
  }

  getProduct(id: number) {
    this.isLoading = true;
    this._productsService.getProductById(id).pipe(finalize(() => this.isLoading = false)).subscribe((res) => {
      this.product = res;
    })
  }

  addToCart(): void {
  
    this._productsService.getProductById(this.id).pipe(finalize(() => alert("Product added"))).subscribe((res) => {
      this._cart.addToCart(res);
    })

  }
}

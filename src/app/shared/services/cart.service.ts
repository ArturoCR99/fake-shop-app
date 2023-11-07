import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Product } from 'src/app/products/interfaces/product';

@Injectable({
  providedIn: 'root'
})

export class CartService {


  //Subjects
  private productsQty: BehaviorSubject<number> = new BehaviorSubject(0);
  private subtotal: BehaviorSubject<number> = new BehaviorSubject(0);

  //Props
  private cart: Product[] = [];
  private db: Product[] = JSON.parse(localStorage.getItem('cart')!);

  constructor() {
    if (!this.db) {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    }
  }

  addToCart(product: Product): void {
    this.db.push(product);
    localStorage.setItem('cart', JSON.stringify(this.db));

    this.getProductQty().subscribe();
    this.getSubtotal().subscribe();
  }

  getProductQty(): Observable<number> {
    this.productsQty.next(this.db.length);
    return this.productsQty;
  }

  getSubtotal(): Observable<number> {
    const st: number = this.db.reduce((acumulador, actual) => acumulador + actual.price, 0);
    this.subtotal.next(st);
    return this.subtotal;
  }

}

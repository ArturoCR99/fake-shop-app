import { AfterViewInit, Component, Input, OnInit, inject } from '@angular/core';
import { Product } from '../../interfaces/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent{

  private router = inject(Router);
  @Input('product') product!: Product;

  constructor(){}

  navigate(subCat: string, id: number){
    this.router.navigateByUrl(`/products/detail/${subCat}/${id}`)
  }
  
}

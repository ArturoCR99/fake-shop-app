import { Component, OnInit, inject } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../../interfaces/product';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  private _productsService = inject(ProductsService);
  private _route = inject(ActivatedRoute);
  public id!: number;
  public product!: Product;
  public isLoading: boolean = false;

  constructor(){}

  ngOnInit(): void {
    this._route.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id')!;
      this.getProduct(this.id);
    })
  }

  getProduct(id: number){
    this.isLoading = true;

    this._productsService.getProductById(id).pipe(finalize(() => this.isLoading = false)).subscribe((res) => {
      this.product = res;
    })
  }

}

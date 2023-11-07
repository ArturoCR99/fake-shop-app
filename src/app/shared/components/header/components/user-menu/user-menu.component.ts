import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.css']
})
export class UserMenuComponent {

  //Services
  public _cart = inject(CartService);

  //Props
  public productsQty$: Observable<number> = this._cart.getProductQty();
  public subtotal$: Observable<number> = this._cart.getSubtotal();

  constructor() {
  }
}

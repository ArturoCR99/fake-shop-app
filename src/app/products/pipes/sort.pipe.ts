import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../interfaces/product';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(products: Product[], type: string): Product[] {

    if (type == "highest price")
      return products.sort((x, y) => y.price - x.price);

    if (type == "lowest price")
      return products.sort((x, y) => x.price - y.price);

    return products
  }

}

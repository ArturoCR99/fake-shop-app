import { Component, Input, inject } from '@angular/core';
import { Category } from '../../../../interfaces/category';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  private router = inject(Router);
  @Input('categories') categories!: Category[];
  @Input('subCategories') subCategories!: string[];

  constructor() { }

  navigate(cat: string, subCat: string) {
    this.router.navigateByUrl(`/products/category/${cat}/${subCat}`).then(() => {
      window.location.reload()
    }
    )
  }
}

import { Component, Input } from '@angular/core';
import { Category } from '../../../../interfaces/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  @Input('categories') categories!: Category[];
  @Input('subCategories') subCategories!: string[];

  constructor(){}
}

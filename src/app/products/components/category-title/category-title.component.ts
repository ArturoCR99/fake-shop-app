import { Component, inject } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-category-title',
  templateUrl: './category-title.component.html',
  styleUrls: ['./category-title.component.css']
})
export class CategoryTitleComponent {

  private route = inject(ActivatedRoute);
  cat!: string;
  subCat!: string;


  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.cat = param.get('cat')!
    });

    this.route.paramMap.subscribe((param: ParamMap) => {
      this.subCat = param.get('subcat')!
    });
  }
}

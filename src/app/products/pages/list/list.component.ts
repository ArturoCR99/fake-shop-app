import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, ParamMap, Route } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  category: string = "";
  subCategory: string = "";

  private route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.paramMap.subscribe((param: ParamMap) => {
      this.category = param.get('category')!
    });

    this.route.paramMap.subscribe((param: ParamMap) => {
      this.subCategory = param.get('subcategory')!
    });
  }


}

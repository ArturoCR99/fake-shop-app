import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild("a") a!: ElementRef;

  constructor() {
    setTimeout(() => {
      console.log(this.a);
    }, 2000)
  }
}

declare const require: any;

import { AfterViewInit, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements AfterViewInit{

  constructor(private location: Location) {}

  ngAfterViewInit(): void {
    require('./../../../assets/js/main.js');
  }

  onClick() {
    this.location.back();
  }

}

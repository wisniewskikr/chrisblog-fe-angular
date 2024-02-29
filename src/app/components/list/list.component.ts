import { AfterViewInit, Component } from '@angular/core';
import { ListAsideComponent } from './list-aside/list-aside.component';
import { ListMainComponent } from './list-main/list-main.component';
import $ from "jquery";


@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListAsideComponent, ListMainComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements AfterViewInit {

  ngAfterViewInit(): void {
    $.getScript('./../../../../../assets/js/main.js');
  }

}

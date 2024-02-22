import { Component } from '@angular/core';
import { ListAsideComponent } from '../list-aside/list-aside.component';
import { ListMainComponent } from '../list-main/list-main.component';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [ListAsideComponent, ListMainComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

}

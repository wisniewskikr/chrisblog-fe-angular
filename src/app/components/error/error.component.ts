import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'error',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

  errorTitle = "System Error";
  errorText = "It seems that there is some problem with system. We will try to resolve it as soon as possible. Sorry for the inconvenience.";

}

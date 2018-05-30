import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'] // exturnal styles
  // inline styles
  styles:[`
  h3{
    color: green;
  }
  `]
})
export class AppComponent {
  title = 'app';
}

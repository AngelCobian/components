import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // element selector
  // selector: '[app-servers]', //attribute selector
  // selector: '[.app-server]',

  templateUrl: './servers.component.html', // external temlate
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`, // inturnal template
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

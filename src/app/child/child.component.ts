import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  // template: ``,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message: String = 'Hola Hend!';
  constructor() { }
  ngOnInit() {
  }

}

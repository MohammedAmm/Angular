import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  // template: `{{message}}<app-child></app-child>`,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  @ViewChild(ChildComponent) child: ChildComponent;
  constructor() { }
  message: String;
  ngOnInit() {
    this.message = this.child.message;
  }

}

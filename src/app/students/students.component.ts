import { Component, OnInit } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {

  constructor() { }
  students: Student [] = [
    new Student (1, 'mohamed' , 30 ),
    new Student (2, 'ahmed' , 27),
    new Student (3, 'hend' , 24),
    new Student (4, 'sara' , 18)
  ];
  delete(elm) {
    this.students.splice(this.students.indexOf(elm), 1 );
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Course } from '../course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  myFilter: String = '';
  color: String = 'yellow';
  Id: Number = 12;
  Name: String = 'Angular';
  Duration: Number = 123;
  Date: Date;
  courses: Course [] = [
    new Course (1, 'java' , 30 , new Date(1995, 3, 15)),
    new Course (2, 'php' , 27, new Date(1995, 3, 15)),
    new Course (3, 'c' , 24, new Date(1995, 3, 15)),
    new Course (4, 'angular' , 18, new Date(1995, 3, 15))
  ];
  constructor() { }
  save() {
    this.courses.push(new Course( this.Id, this.Name, this.Duration , new Date(2018 , 4, 26)));
    this.Id = 0;
    this.Name = '';
    this.Duration = 0;
    }
  ngOnInit() {
  }

}

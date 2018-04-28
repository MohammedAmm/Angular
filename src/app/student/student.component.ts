import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from '../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  @Output() deleteStudentEvent: EventEmitter<Student> = new EventEmitter<Student>();
  constructor() { }
  ngOnInit() {
  }
  deleteStudent(student) {
    this.deleteStudentEvent.emit(student);
  }
}

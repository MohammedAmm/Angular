import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { FilterarrayPipe } from './shared/filterarray.pipe';
import { TestfilterPipe } from './shared/testfilter.pipe';
import { HighlightDirective } from './shared/highlight.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StudentComponent } from './student/student.component';
import { StudentsComponent } from './students/students.component';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FilterarrayPipe,
    TestfilterPipe,
    HighlightDirective,
    ParentComponent,
    ChildComponent,
    StudentComponent,
    StudentsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesAPI } from './courses-api/courses.api';
import { Course } from './courses-dto/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesAPI]
})
export class CoursesComponent implements OnInit {

  selectedCourse: Course;
  public courses: Course[];
  public course: Course = {
    id: 0,
    name: '',
    courseDate: new Date(),
    courseTimeFrom: {
      hours: 0,
      minutes: 0
    },
    courseTimeTo: {
      hours: 0,
      minutes: 0
    }
  };

  constructor(public courseAPI: CoursesAPI) { }

  ngOnInit(){

    this.courseAPI.getCourseById(2).then( res => this.course = res, () => alert('No course with id given!') ).catch( () => alert('No course found.') );

    //this.courses = await this.courseAPI.getCourses();
    //this.courseAPI.getCourses().then( res => this.courses = res, () => alert('No courses'));

    this.courseAPI.getCoursesObservbable().subscribe( courses => this.courses = courses, error => console.log('Error...') );
    
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
    console.log(this.selectedCourse);
  }

}

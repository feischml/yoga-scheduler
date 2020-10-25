import { Injectable } from '@angular/core';
import { Course } from '../courses-dto/course'
import { COURSES } from '../courses-mock/courses.mock';

@Injectable()
export class CoursesAPI{

    public getCourses():Promise<Course[]>{
        return new Promise<Course[]>((res, rej) => {
            let courses = COURSES; 
            if (courses){
                res(courses);
            } else {
                rej('No courses found!');
            }
        });
    };

    public getCourseById(id:number):Promise<Course>{
        return new Promise<Course>(async (res, rej) => {
            const courses = await this.getCourses();
            const course = courses.find( item => item.id === id );
            if (course){
                res(course);
            } else {
                rej('No course found');
            }
        });
    }

}
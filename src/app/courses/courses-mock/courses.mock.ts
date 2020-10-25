import { Course } from '../courses-dto/course';

export const COURSES: Course[] = [{
    id: 1,
    name: 'Beginner class',
    courseDate: new Date(),
    courseTimeFrom:{
        hours: 19,
        minutes: 0
    },
    courseTimeTo:{
        hours: 20,
        minutes: 0
    }
},{
    id: 2,
    name: 'Medium class',
    courseDate: new Date(),
    courseTimeFrom:{
        hours: 18,
        minutes: 0
    },
    courseTimeTo:{
        hours: 19,
        minutes: 0
    }
},{
    id: 3,
    name: 'Advanced class',
    courseDate: new Date(),
    courseTimeFrom:{
        hours: 18,
        minutes: 0
    },
    courseTimeTo:{
        hours: 19,
        minutes: 0
    }
},{
    id: 4,
    name: 'Mix class',
    courseDate: new Date(),
    courseTimeFrom:{
        hours: 18,
        minutes: 0
    },
    courseTimeTo:{
        hours: 29,
        minutes: 0
    }
}]; 
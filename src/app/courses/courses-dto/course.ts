import { Time } from '@angular/common';

export interface Course {
    id: number;
    name: string;
    courseDate: Date;
    courseTimeFrom: Time;
    courseTimeTo: Time;
}
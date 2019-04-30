import { Component } from '@angular/core';
import { Lesson } from '../shared/model/lesson';
import { Observer } from 'rxjs';

@Component({
    selector: 'lessons-list',
    templateUrl: './lessons-list.component.html',
    styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent {

    lessons: Lesson[] = [];

    constructor() { }

}


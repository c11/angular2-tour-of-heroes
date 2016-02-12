/**
 * Created by yang on 2/10/16.
 */
import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Task} from './task';

@Component({
    selector: 'ts-top-banner',
    templateUrl: 'app/banners/top-banner.component.html'
})
export class TopBannerComponent {
    @Input() tasks: Task[];
    selectedTask: Task;
    @Output() taskChanged: EventEmitter<Task> = new EventEmitter();

    onSelectTask(task: Task) {
        this.selectedTask = task;
        this.taskChanged.emit(this.selectedTask);
    }
}

import {Component, OnInit} from 'angular2/core';
import {PlotComponent} from './plots/plot.component';
import {TopBannerComponent} from './banners/top-banner.component';
import {TimeSyncService} from './services/timesync.service';
import {Http} from 'angular2/http';
import {Task} from './banners/task';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Plot} from './plots/plot';
import {TrajectoryComponent} from './trajectory/spectral-trajectory.component';


@Component({
    selector: 'ts-app',
    template: `
    <ts-top-banner [tasks]='tasks'
        (taskChanged)='onTaskChanged($event)'></ts-top-banner>

    <div id="containerDiv">

      <ts-plot-list [plots]='plots'></ts-plot-list>
      <ts-trajectory [data]='data'></ts-trajectory>
    </div>


  `,
    styles: [`
    a {padding: 5px;text-decoration: none;}
    a:visited, a:link {color: #444;}
    a:hover {color: white; background-color: #1171a3;}
    a.router-link-active {color: white; background-color: #52b9e9;}
  `],
    directives: [PlotComponent, TopBannerComponent, TrajectoryComponent],
    providers: [TimeSyncService, Http, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {
    public title = 'TimeSync V3.0';

    selectedTask: Task;
    tasks: Task[];

    selectedPlot: Plot;
    plots: Plot[];

    userID: number;
    tsa: number;

    data: Array<number> = [10, 20, 30, 40, 50];

    constructor(private _tsService: TimeSyncService) {
        this.userID = 9;
        this.tsa = 999999;
    }

    ngOnInit() {
        this._tsService.getTasks(this.userID)
            .subscribe(
                data => this.tasks = data,
                err => console.error(err),
                () => console.log('tasks retrieved')
            );
    }

    onTaskChanged(task: Task) {
        this.selectedTask = task;
        this.getPlots(task);
    }

    getPlots(task: Task) {
        this._tsService.getPlots(task.project_id, this.tsa, this.userID)
            .subscribe(
                data => {this.plots = data; console.log(data); },
                err => console.error(err),
                () => console.log('plots retrieved')
            );
        console.log('retrieving plots');
    }
}

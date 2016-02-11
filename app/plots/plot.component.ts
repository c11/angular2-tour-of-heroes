/**
 * Created by yang on 2/10/16.
 */

import {Component, Input} from 'angular2/core';
import {Plot} from './plot';

// import {TimeSyncService} from '../services/timesync.service';
// import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
    selector: 'ts-plot-list',
    template: `
       <div id="plotSelectionDiv" class="sectionDiv">
         <p class="header">Plots</p>
           <ul id="plotList">
             <li *ngFor="#plot of plots" (click)="plotSelected(plot)">{{plot.plotid}}</li>
           </ul>
       </div>`,
    styleUrls: ['app/dashboard.component.css']
    // providers: [TimeSyncService, HTTP_PROVIDERS]
})
export class PlotComponent {
    @Input() plots: Plot[]; // s List<Plot>();

    // constructor(private _tsService: TimeSyncService) { }

    // ngOnInit() {
    //    this._tsService.getPlots(3000, 999999, 9)
    //                    .subscribe(
    //                        data => this.plots = data,
    //                        err => console.error(err),
    //                        () => console.log('sample plots retrieved')
    //                    );
    // }

    plotSelected(plot: Plot) {
        console.log(plot.plotid);
    }
}

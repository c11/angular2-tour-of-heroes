/**
 * Created by yang on 2/10/16.
 */

import {Component, Input} from 'angular2/core';
import {Plot} from './plot';

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
})
export class PlotComponent {
    @Input() plots: Plot[]; // s List<Plot>();

    plotSelected(plot: Plot) {
        console.log(plot.plotid);
    }
}

/**
 * Created by yang on 2/10/16.
 */

import {Component, Input, ElementRef, Renderer, OnInit, OnChanges} from 'angular2/core';
// import * as d3 from 'd3';

declare var jQuery: any;
declare var d3: any;

@Component({
    selector: 'ts-trajectory',
    templateUrl: 'app/trajectory/spectral-trajectory.component.html',
    // template: `<div>test
    //
    // <h2>I am h2</h2>
    //
    // <h3>I am h3</h3>
    //
    // <div id="figure"></div>
    //
    // </div>`,
    providers: [ElementRef]
})
export class TrajectoryComponent {
    @Input() data: any;
    @Input() width: number;
    @Input() height: number;
    divs: any;

    indices: Array<any> = [
            {id: 'B1', label: 'Band 1', isActive: false},
            {id: 'B2', label: 'Band 2', isActive: false},
            {id: 'B3', label: 'Band 3', isActive: false},
            {id: 'B4', label: 'Band 4', isActive: false},
            {id: 'B5', label: 'Band 5', isActive: false},
            {id: 'B7', label: 'Band 7', isActive: false},
            {id: 'TCB', label: 'Brightness', isActive: false},
            {id: 'TCG', label: 'Greenness', isActive: false},
            {id: 'TCW', label: 'Wetness', isActive: true},
            {id: 'TCA', label: 'Angle', isActive: false},
            {id: 'NDVI', label: 'NDVI', isActive: false},
            {id: 'NBR', label: 'NBR', isActive: false}];

    selectedIndex: any = this.indices[8];

    constructor(public renderer: Renderer, public el: ElementRef) {
    }

    onChangeSpectralIndex(selectedIndex): void {
        this.selectedIndex.isActive = false;
        this.selectedIndex = selectedIndex;
        this.selectedIndex.isActive = true;
    }

    /**
     * Toggle segment line
     */
    onToggleLine(): void {

    }

    /**
     * Show all the data points
     */
    onToggleAllPoints(): void {

    }

    // D3 Points and Line


    //render(newValue: any) {
    //    if (!newValue) {
    //        return;
    //    }
    //
    //    console.log('new value');
    //    console.log(newValue);
    //
    //    //jQuery(this.el.nativeElement).find('.chart').empty();
    //
    //    this.figure = d3.select(this.el.nativeElement).select('.chart');
    //
    //    console.log(this.figure);
    //
    //    if (this.figure) {
    //        this.figure.selectAll('div').data(newValue).enter()
    //            .append('div').transition()
    //            .ease('elastic')
    //            .style('width', d => d*10 + 'px')
    //            .text(d => d);
    //        //.exit().remove();
    //    }
    //    else {
    //        console.log('null object');
    //    }
    //}



}

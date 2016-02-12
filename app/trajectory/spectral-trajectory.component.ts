/**
 * Created by yang on 2/10/16.
 */

import {Component, Input, ElementRef, Renderer, OnInit, OnChanges} from 'angular2/core';
// import * as d3 from 'd3';

declare var jQuery: any;
declare var d3: any;

@Component({
    selector: 'ts-trajectory',
    // templateUrl: 'app/trajectory/spectral-trajectory.component.html',
    template: `<div>test

    <h2>I am h2</h2>

    <h3>I am h3</h3>

    <div id="figure"></div>

    </div>`,
    providers: [ElementRef]
})
export class TrajectoryComponent implements OnInit, OnChanges {
    @Input() data: any;
    @Input() width: number;
    @Input() height: number;
    divs: any;

    constructor(public renderer: Renderer, public el: ElementRef) {
    }




    ngOnInit() {
        console.log(this.el.nativeElement);

        let h2 = jQuery(this.el.nativeElement).find('h2')[0];
        let h3 = d3.select(this.el.nativeElement).select('h3');

        this.renderer.setElementStyle(h3[0][0], 'background-color', 'yellow');
        this.renderer.setElementStyle(h2, 'background-color', 'red');

        let graph: any = d3.select(this.el.nativeElement).select('#figure');

        console.log('in oninit');
        console.log(graph);
        console.log('done init');

        let w = 600;
        let h = 250;
        let padding = 30;

        let dataset: any = [];
        let maxRange: number = 1000;
        let i: number = 0;
        for (i = 0; i < 10; i++) {
            let x = Math.floor(Math.random() * maxRange);
            let y = Math.floor(Math.random() * maxRange);
            dataset.push([x, y]);
        }

        var xScale = d3.scale.linear()
            .domain([0, d3.max(dataset, function(d) {
                return d[0];
            })])
            .range([padding, w - padding * 2]);

        let yScale = d3.scale.linear()
            .domain([0, d3.max(dataset, function(d) {
                return d[1];
            })])
            .range([h - padding, padding]);

        // let xAxis = d3.svg.axis()
        //    .scale(xScale)
        //    .orient('bottom')
        //    .ticks(5);
        // let yAxis = d3.svg.axis()
        //    .scale(yScale)
        //    .orient('left')
        //    .ticks(5);


        this.divs = graph.append('svg')
            .attr('class', 'chart')
            .attr('width', w)
            .attr('hright', h)
            .selectAll('circle').data(dataset)
            .enter()
            .append('circle')
            .attr('cx', function(d) {
                return xScale(d[0]);
            })
            .attr('cy', d => yScale(d[1])
            .attr('r', 4)
            .attr('fill', 'teal');


        console.log('emd');
        console.log(this.divs);




    }

    render(newValue: any) {
        if (!newValue) {
            return;
        }
        console.log('in render');
        console.log(newValue);
        console.log('end Render');

        console.log('render');
        console.log(this.divs);
        console.log('done rendereer');

        if (this.divs) {
            this.divs.data(newValue).enter()
                .append('div').transition()
                .ease('elastic')
                .style('width', d => d + '%')
                .text(d => d + '%');
        }
    }

    ngOnChanges() {
        console.log('onChange');
        console.log(this.data);
        this.render(this.data);
        console.log('endChange');
    }

}

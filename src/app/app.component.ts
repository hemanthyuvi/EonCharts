import { Component } from '@angular/core';
import * as d3 from "d3";
import { ChartDataService } from './chartData.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  fromDate: NgbDateStruct | undefined;
  toDate: NgbDateStruct | undefined;
  constructor(private ser: ChartDataService) { }

  ngOnInit(): void {
    this.createChart();
  }

  private createChart(): void {
    const data = this.ser.rawData;
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 1000 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const svg = d3.select("figure#chart")
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", `translate(${margin.left},${margin.top})`);

    const x = d3.scaleTime()
                .domain(d3.extent(data, d => d.date) as [Date, Date])
                .range([0, width]);

    const y = d3.scaleLinear()
                .domain([0, d3.max(data, d => d.value) as number])
                .range([height, 0]);

    const line = d3.line<any>()
                   .x(d => x(d.date))
                   .y(d => y(d.value));

    svg.append("g")
       .attr("transform", `translate(0,${height})`)
       .call(d3.axisBottom(x));

    svg.append("g")
       .call(d3.axisLeft(y));

    svg.append("path")
       .datum(data)
       .attr("fill", "none")
       .attr("stroke", "steelblue")
       .attr("stroke-width", 1.5)
       .attr("d", line);

    // Adding the red dot as an example
    svg.selectAll("dot")
       .data(data)
       .enter().append("circle")
       .attr("r", 4)
       .attr("cx", d => x(d.date))
       .attr("cy", d => y(d.value))
       .style("fill", d => d.date.getTime() === new Date('2024-05-06').getTime() ? "red" : "steelblue");
  }

}

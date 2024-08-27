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
    this.createChart(this.ser.rawData);
  }

  monthClicked(selectedMonth:number){
    const  currentDate = new Date();
    const toDate = this.getDateFormat(currentDate);
    this.toDate = toDate;
    const oneMonthBefore = new Date(currentDate);
    oneMonthBefore.setMonth(currentDate.getMonth() - selectedMonth);
    this.fromDate = this.getDateFormat(oneMonthBefore);
    this.refreshChartData(oneMonthBefore);
  }

  getDateFormat(date:Date){
    const year = date?.getFullYear();
    const month = date?.getMonth();
    const day = date?.getDate();
    return {year,month,day}
  }

  refreshChartData(date: Date){
    let data = structuredClone(this.ser.rawData);
    const currentDate = new Date();
    data?.forEach(record => {
      const filteredData = record?.values?.filter(item => item?.date < currentDate && item?.date > date);
      record.values = filteredData;
    });
    this.clearChartData();
    this.createChart(data);
  }

  clearChartData(): void {
    d3.selectAll('svg').remove();
    d3.selectAll('path').remove();
  }

  dateChanged(){
    
  }
 


  private createChart(refreshChartData:any): void {
    const data = [...refreshChartData];  // Assuming data is an array of objects, each with a 'name' and 'values' array
    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 1000 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    // Create the SVG container and set the origin.
    const svg = d3.select("figure#chart")
                  .append("svg")
                  .attr("width", width + margin.left + margin.right)
                  .attr("height", height + margin.top + margin.bottom)
                  .append("g")
                  .attr("transform", `translate(${margin.left},${margin.top})`);

    // Flatten all values to find global min/max for the x and y scales
    const allValues = data.flatMap(d => d.values);

    // Set the x and y scales based on the data
    const x = d3.scaleTime()
                .domain(d3.extent(allValues, d => d.date) as [Date, Date])
                .range([0, width]);

    const y = d3.scaleLinear()
                .domain([0, d3.max(allValues, d => d.value) as number])
                .range([height, 0]);

    // Append the x-axis to the svg
    svg.append("g")
       .attr("transform", `translate(0,${height})`)
       .call(d3.axisBottom(x));

    // Append the y-axis to the svg
    svg.append("g")
       .call(d3.axisLeft(y));

    // Create a line generator function for the multi-line chart
    const line = d3.line<any>()
                   .x(d => x(d.date))
                   .y(d => y(d.value));

    // Draw a line and points for each country
    data.forEach(country => {
        // Draw the line for each country
        svg.append("path")
           .datum(country.values)
           .attr("fill", "none")
           .attr("stroke", "steelblue")
           .attr("stroke-width", 1.5)
           .attr("d", line);

        // Add circles at each data point for the country
        svg.selectAll(`circle-${country.name}`)
           .data(country?.values)
           .enter().append("circle")
           .attr("r", 4)
           .attr("cx", (d:any) => x(d.date))
           .attr("cy", (d:any) => y(d.value))
           .style("fill", (d:any) => d.date.getTime() === new Date('2024-05-06').getTime() ? "red" : "steelblue")
           .append("title")  // Add tooltip
           .text((d:any) => `${country.name}: ${d.value}`);
    });
}


}

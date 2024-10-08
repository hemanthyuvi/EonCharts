import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartDataService {

  rawData = [
    {
      name: "USA",
      values: [
        { date: new Date('2024-04-08'), value: 85 },
        { date: new Date('2024-04-15'), value: 90 },
        { date: new Date('2024-04-22'), value: 75 },
        { date: new Date('2024-05-06'), value: 60 },
        { date: new Date('2024-05-13'), value: 70 },
        { date: new Date('2024-05-20'), value: 80 },
        { date: new Date('2024-05-27'), value: 85 },
        { date: new Date('2024-06-03'), value: 90 },
        { date: new Date('2024-06-10'), value: 95 },
        { date: new Date('2024-06-17'), value: 100 },
        { date: new Date('2024-06-24'), value: 95 },
        { date: new Date('2024-07-01'), value: 90 },
        { date: new Date('2024-07-08'), value: 85 },
        { date: new Date('2024-07-15'), value: 80 },
        { date: new Date('2024-07-22'), value: 85 },
        { date: new Date('2024-07-29'), value: 90 },
        { date: new Date('2024-08-16'), value: 80 }
      ]
    },
    {
      name: "INDIA",
      values: [
        { date: new Date('2024-04-08'), value: 85 },
        { date: new Date('2024-04-15'), value: 33 },
        { date: new Date('2024-04-22'), value: 75 },
        { date: new Date('2024-05-06'), value: 60 },
        { date: new Date('2024-05-13'), value: 28 },
        { date: new Date('2024-05-20'), value: 58 },
        { date: new Date('2024-05-27'), value: 85 },
        { date: new Date('2024-06-03'), value: 90 },
        { date: new Date('2024-06-10'), value: 95 },
        { date: new Date('2024-06-17'), value: 100 },
        { date: new Date('2024-06-24'), value: 95 },
        { date: new Date('2024-07-01'), value: 79 },
        { date: new Date('2024-07-08'), value: 85 },
        { date: new Date('2024-07-15'), value: 80 },
        { date: new Date('2024-07-22'), value: 39 },
        { date: new Date('2024-07-29'), value: 90 },
        { date: new Date('2024-08-16'), value: 10 }
      ]
    },
    {
      name: "CANADA",
      values: [
        { date: new Date('2024-04-08'), value: 5 },
        { date: new Date('2024-04-15'), value: 90 },
        { date: new Date('2024-04-22'), value: 75 },
        { date: new Date('2024-05-06'), value: 60 },
        { date: new Date('2024-05-13'), value: 48 },
        { date: new Date('2024-05-20'), value: 58 },
        { date: new Date('2024-05-27'), value: 85 },
        { date: new Date('2024-06-03'), value: 90 },
        { date: new Date('2024-06-10'), value: 95 },
        { date: new Date('2024-06-17'), value: 100 },
        { date: new Date('2024-06-24'), value: 95 },
        { date: new Date('2024-07-01'), value: 90 },
        { date: new Date('2024-07-08'), value: 49 },
        { date: new Date('2024-07-15'), value: 80 },
        { date: new Date('2024-07-22'), value: 9 },
        { date: new Date('2024-07-29'), value: 90 },
        { date: new Date('2024-08-16'), value: 80 }
      ]
    }
  ];

constructor() { }

}

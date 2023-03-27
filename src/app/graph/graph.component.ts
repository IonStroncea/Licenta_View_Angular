import { Component, Input  } from '@angular/core';

import Chart from 'chart.js';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {

  @Input() id: number;

  public chart: any;
  public xValues : any = [];
  public yValues : any= [];

  
  ngOnInit(): void {
    for (let i = 0; i < 100; i++) {
      this.xValues.push(0);     
      this.yValues.push(0);
    }
    console.log(this.id);
    setTimeout(()=>{                      
      this.createChart();
  }, 30);
  }
  


  createChart(){
  console.log("MyChart" + this.id);
    this.chart = new Chart("MyChart" + this.id, {
      type: "line",

      data: {
        labels: this.xValues,
        datasets: [{
            fill: true,
            backgroundColor: "rgba(0,0,255,0.1)",
            borderColor: "rgba(0,0,255,0.5)",
            data: this.yValues
        }]
    },
    options: {
      legend: { display: false },
      scales: {
          yAxes: [{ ticks: { min: 0, max: 100 } }],
      },
      animation: {
          duration: 0
      }
  }
      
    });
  }
}

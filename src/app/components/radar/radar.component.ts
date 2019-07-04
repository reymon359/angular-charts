import { Component,ViewChild } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Color,BaseChartDirective,Label } from 'ng2-charts';
@Component({
  selector: 'app-radar',
  templateUrl: './radar.component.html',
  styles: []
})
export class RadarComponent {

  public radarChartOptions: RadialChartOptions = {
    responsive: true,
  };
  public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Playing', 'Running', 'Jumping', 'Swimming'];

  public radarChartData: ChartDataSets[] = [
    { data: [65, 59, 90, 81, 56, 55, 40], label: 'Dogs🐕' },
    { data: [28, 48, 40, 19, 96, 27, 100], label: 'Cats🐱‍🏍' }
  ];

  @ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;
  public randomize(): void {
    for (let i = 0; i < this.radarChartData.length; i++) {
      for (let j = 0; j < this.radarChartData[i].data.length; j++) {
        this.radarChartData[i].data[j] = Math.round(Math.random() * 100);
      }
    }
    this.chart.update();
  }


  public radarChartType: ChartType = 'radar';
  public radarChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.7)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // red
      backgroundColor: 'rgb(235, 104, 100,0.7)',
      borderColor: '#e22620',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}

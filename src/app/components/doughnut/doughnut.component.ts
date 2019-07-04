import { Component } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-doughnut',
  templateUrl: './doughnut.component.html',
  styles: []
})
export class DoughnutComponent {
  // Doughnut
  public doughnutChartLabels: Label[] = ['Dogs🐕', 'Cats🐱‍🏍', 'Tortoises🐢'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartColors: Color[] = [
    {
      backgroundColor: [
        'rgba(148,159,177,0.7)', 'rgba(77,83,96,0.7)', 'rgb(235, 104, 100,0.7)'
      ],
      borderColor: ['rgba(148,159,177,1)', 'rgba(77,83,96,1)', '#e22620'],
    },
    {
      backgroundColor: [
        'rgba(148,159,177,0.7)', 'rgba(77,83,96,0.7)', 'rgb(235, 104, 100,0.7)'
      ],
      borderColor: ['rgba(148,159,177,1)', 'rgba(77,83,96,1)', '#e22620'],
    },
    {
      backgroundColor: [
        'rgba(148,159,177,0.7)', 'rgba(77,83,96,0.7)', 'rgb(235, 104, 100,0.7)'
      ],
      borderColor: ['rgba(148,159,177,1)', 'rgba(77,83,96,1)', '#e22620'],
    }
  
  ];
  public doughnutChartType: ChartType = 'doughnut';

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}


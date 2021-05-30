import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'node_modules/chart.js';
import { CovidService } from 'src/app/services/covid/covid.service';

const baseConfig: Chart.ChartConfiguration = {
    type: 'doughnut',
    options: {
      scales: {
       xAxes: [{ 
         display: false,
      }],
      yAxes: [{
         display: false,
      }],
      }
    }
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @ViewChildren('pr_chart', { read: ElementRef}) chartElementRefs: QueryList<ElementRef>

  chartData: Chart.chartData[]
  charts: Chart[] = []

  constructor(private router: Router ) { }


  ngOnInit(): void {

      this.createChart()
    
      //https://www.ordinarycoders.com/blog/article/11-chart-js-examples

   } 

   ngAfterViewInit(){
     this.charts = this.chartElementRefs.map( (chartElementRefs, index) => {
       const config = Object.assign({}, baseConfig, { data: this.chartData[index]})

       return new Chart(chartElementRefs.nativeElement, config)
     })
   }

   createChart() {
     this.chartData = [
       {
        title: 'Verdedor 1',
        labels: ["Success","Stop", "Error"],
        datasets: [{
          data: [4,3,1],
          borderColor:[
            "#3cba9f",
            "#ffa500",
            "#c45850",
          ],
          backgroundColor: [
            "#3cba9f",
            "#ffa500",
            "#c45850",
          ],
          borderWidth:2
        }]
       },
       {
        title: 'Verdedor 2',
        labels: ["Success","Stop", "Error"],
        datasets: [{
          data: [7,2,4],
          borderColor:[
            "#3cba9f",
            "#ffa500",
            "#c45850",
          ],
          backgroundColor: [
            "#3cba9f",
            "#ffa500",
            "#c45850",
          ],
          borderWidth:2
        }]
       },
       {
        title: 'Verdedor 3',
        labels: ["Success","Stop", "Error"],
        datasets: [{
          data: [2,1,1],
          borderColor:[
            "#3cba9f",
            "#ffa500",
            "#c45850",
          ],
          backgroundColor: [
            "#3cba9f",
            "#ffa500",
            "#c45850",
          ],
          borderWidth:2
        }]
       },
       {
        title: 'Verdedor 4',
        labels: ["Success","Stop", "Error"],
        datasets: [{
          data: [3,0,1],
          borderColor:[
            "#3cba9f",
            "#ffa500",
            "#c45850",
          ],
          backgroundColor: [
            "#3cba9f",
            "#ffa500",
            "#c45850",
          ],
          borderWidth:2
        }]
       }
     ]
   }

   graficoBarras() {
    let myBarChart = new Chart('barras', {
      type: 'bar',
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [
              {
                data: [86,114,106,106,107,111,133],
                label: "Total",
                borderColor: "#3e95cd",
                backgroundColor: "#7bb6dd",
                fill: false,
              }, { 
                data: [70,90,44,60,83,90,100],
                label: "Accepted",
                borderColor: "#3cba9f",
                backgroundColor: "#71d1bd",
                fill: false,
              }, { 
                data: [10,21,60,44,17,21,17],
                label: "Pending",
                borderColor: "#ffa500",
                backgroundColor:"#ffc04d",
                fill: false,
              }, { 
                data: [6,3,2,2,7,0,16],
                label: "Rejected",
                borderColor: "#c45850",
                backgroundColor:"#d78f89",
                fill: false,
              }
          ]}/* ,
      options: {
        scales: {
            xAxes: [{
                stacked: true
            }],
            yAxes: [{
                stacked: true
            }]
        }
    } */
  });
   }

   findJobs() {
    this.router.navigate(['pse/dashboard/jobs']);
   }

}

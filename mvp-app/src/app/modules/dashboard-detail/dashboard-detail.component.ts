import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Chart } from 'node_modules/chart.js';
import { Teste } from 'src/app/model/teste';
import { CovidService } from 'src/app/services/covid/covid.service';
import { JobDialogComponent } from './job-dialog/job-dialog.component';

const baseConfig: Chart.ChartConfiguration = {
    type: 'bar',
/*     options: {
      scales: {
          xAxes: [{
              stacked: true
          }],
          yAxes: [{
              stacked: true
          }]
      }
  } */ 
}

export interface PeriodicElement {
  total: number;
  job: string;
  success: number;
  error: number;
  stop: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {job: 'jobSun', total: 4, success: 3, error: 1, stop: 1},
  {job: 'jobVigilance', total: 4, success: 2, error: 2, stop: 1},
  {job: 'jobMediaNegative', total: 4, success: 1, error: 3, stop: 1},
  {job: 'jobPepSerasa', total: 4, success: 4, error: 0, stop: 1}
];

@Component({
  selector: 'app-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss']
})
export class DashboardDetailComponent implements OnInit {

  displayedColumns: string[] = ['actions','job', 'total', 'success', 'stop', 'error'];
  dataSource = ELEMENT_DATA;

  @ViewChildren('pr_chart', { read: ElementRef}) chartElementRefs: QueryList<ElementRef>

  chartData: Chart.chartData[]
  charts: Chart[] = []

  constructor( private service: CovidService, public dialog: MatDialog ) { }


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
        title: 'AML',
        labels: ["jobSun", "jobVigilance", "jobMediaNegative", "jobPepSerasa"],
        datasets: [{ 
          data: [86,114,106,106,107,111,133],
          label: "Total",
          borderColor: "rgb(62,149,205)",
          backgroundColor: "rgb(62,149,205)",
          borderWidth:2
        }, { 
          data: [70,90,44,60,83,90,100],
          label: "Success",
          borderColor: "rgb(60,186,159)",
          backgroundColor: "rgb(60,186,159)",
          borderWidth:2
        }, { 
          data: [10,21,60,44,17,21,17],
          label: "Stop",
          borderColor: "rgb(255,165,0)",
          backgroundColor:"rgb(255,165,0)",
          borderWidth:2
        }, { 
          data: [6,3,2,2,7,0,16],
          label: "Error",
          borderColor: "rgb(196,88,80)",
          backgroundColor:"rgb(196,88,80)",
          borderWidth:2
        }]
       }
     ]
   }

   
   openJobDialog(): void {
    const dialogRef = this.dialog.open(JobDialogComponent, {
      width: '70%',
      disableClose: true,
      hasBackdrop: true,
      data: []
    });

    dialogRef.afterClosed().subscribe(result => {
      let id = result;
      //this.load();
      console.log(id)
      //this.editAvaliabilityEmitter.emit(id);
    });
  }
}

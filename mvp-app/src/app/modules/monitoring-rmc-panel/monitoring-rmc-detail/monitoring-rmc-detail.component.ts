import { Component, OnInit, } from '@angular/core';
import { MonitoringService } from 'src/app/services/monitoring/monitoring.service';
import {SelectionModel} from '@angular/cdk/collections';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Param } from 'src/app/model/monitoring/Param';

@Component({
    selector: 'app-monitoring-rmc-detail',
    templateUrl: './monitoring-rmc-detail.component.html',
    styleUrls: ['./monitoring-rmc-detail.component.scss']
  })
export class MonitoringRmcDetailComponent implements OnInit{

    viewInclusion: any[] = []
    viewFailureInclusion: any[] = []
    param = new Param()

    idFileControl: number = 0
    contract: string
    id: number = 0

    viewSuccess = 'teste'

    displayedColumns: string[] = ['captureDate', 'qtdContractCaptured', 'sendDate', 'qtdContractSend', 'exclusionReason',
    'qtdContractAccepted', 'qtdContractRejected', 'idFileControl', 'nameFile'];
    selection = new SelectionModel<any>(true, []);

    constructor (private monitoring: MonitoringService, 
      private activeted: ActivatedRoute,
      private router: Router) {}
    
    ngOnInit(): void {
        console.log('MonitoringRmcDetailComponent') 
        let params: Params = this.activeted.params
        console.log(params.value)
        this.id = params.value.id
        this.idFileControl = params.value.idFileControl
        this.contract = params.value.contract === '*' ? '' : params.value.contract

        this.loadViewExclusion();

      }

      backHome() {
        this.router.navigate(['/pse']);
      }

      loadViewExclusion() {
        console.log('ILDSON > ' + this.id)
        this.monitoring.getViewExclusionById(this.id)
        .subscribe(response => {
           this.viewInclusion = response.contents
        }, errorResponse => {
          console.log(errorResponse)
        })
      }

      loadViewFailureExclusion() {
        this.monitoring.findViewFailureExclusion(this.param, 0, 10)
        .subscribe(response => {
          this.viewFailureInclusion = response
          console.log(response)
        }, errorResponse => { 
          console.log(errorResponse)
        })
      }

}
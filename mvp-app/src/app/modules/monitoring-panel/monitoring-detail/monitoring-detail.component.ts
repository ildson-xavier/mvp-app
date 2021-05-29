import { Component, OnInit, } from '@angular/core';
import { MonitoringService } from 'src/app/services/monitoring/monitoring.service';
import {SelectionModel} from '@angular/cdk/collections';
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Param } from 'src/app/model/monitoring/Param';

@Component({
    selector: 'app-monitoring-detail',
    templateUrl: './monitoring-detail.component.html',
    styleUrls: ['./monitoring-detail.component.scss']
  })
export class MonitoringDetailComponent implements OnInit{

    viewInclusion: any[] = []
    viewFailureInclusion: any[] = []
    param = new Param()

    idFileControl: number = 0
    contract: string
    id: number = 0

    viewSuccess = 'teste'

    displayedColumns: string[] = ['captureDate', 'qtdContractCaptured', 'captureBalance', 'sendDate', 'qtdContractSend', 'sendBalance', 
    'qtdContractAccepted', 'acceptedBalance', 'qtdContractRejected', 'rejectedBalance', 'idFileControl', 'nameFile'];
    selection = new SelectionModel<any>(true, []);

    constructor (private monitoring: MonitoringService, 
      private activeted: ActivatedRoute,
      private router: Router) {}
    
    ngOnInit(): void {
        console.log('MonitoringDetailComponent') 
        let params: Params = this.activeted.params
        console.log(params.value)
        this.id = params.value.id
        this.idFileControl = params.value.idFileControl
        this.contract = params.value.contract === '*' ? '' : params.value.contract

        this.loadViewInclusion();
/*         this.loadViewSuccessInclusion()
        this.loadViewFailureInclusion() */
      }

      backHome() {
        this.router.navigate(['/pse']);
      }

      loadViewInclusion() {
        let param = new Param()
        this.monitoring.getViewInclusionById(this.id)
        .subscribe(response => {
           this.viewInclusion = response.contents
        }, errorResponse => {
          console.log(errorResponse)
        })
      }

      loadViewFailureInclusion() {
        this.monitoring.findViewFailureInclusion(this.param, 0, 10)
        .subscribe(response => {
          this.viewFailureInclusion = response
          console.log(response)
        }, errorResponse => { 
          console.log(errorResponse)
        })
      }

/*       viewDetail(monitoring: any) {
        console.log(monitoring)
      } */
}
import { Component, OnInit, ViewChild, Input, OnChanges, SimpleChange, } from '@angular/core';
import { MonitoringService } from 'src/app/services/monitoring/monitoring.service';
import { SelectionModel } from '@angular/cdk/collections';
import { Param } from 'src/app/model/monitoring/Param';
import { Router } from '@angular/router';
import { MonitoringRmcFormComponent } from '../monitoring-rmc-form/monitoring-rmc-form.component';
import { MatPaginator, PageEvent } from '@angular/material';
import { CsvService } from 'src/app/services/csv/csv.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-monitoring-rmc-table',
  templateUrl: './monitoring-rmc-table.component.html',
  styleUrls: ['./monitoring-rmc-table.component.scss']
})
export class MonitoringRmcTableComponent implements OnInit, OnChanges {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  viewInclusion: any[] = []
  contract: string

  totalElement = 0
  page = 0
  rows = 10
  pageSizeOptions: number[] = [10]

  isCompleted: boolean = false

  @Input() param2: Param
  parameters: Param

  displayedColumns: string[] = ['actions', 'captureDate', 'qtdContractCaptured', 'sendDate', 'qtdContractSend', 'exclusionReason',
    'qtdContractAccepted', 'qtdContractRejected', 'idFileControl', 'nameFile'];

  displayedColumns2: string[] = ['captureDate', 'qtdContractCaptured', 'sendDate', 'qtdContractSend', 'exclusionReason',
  'qtdContractAccepted', 'qtdContractRejected', 'idFileControl', 'nameFile'];

  selection = new SelectionModel<any>(true, []);

  panelOpenState = true;
  step = 0;

  constructor(private monitoring: MonitoringService, private router: Router,
    private csvService: CsvService, private message: MessageService) { }

  ngOnInit(): void {
    console.log('MonitoringRmcTableComponent')
    this.paginator._intl.itemsPerPageLabel="Itens por página";
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    this.parameters = changes['param2'].currentValue
    if (this.parameters !== undefined) {

      this.isCompleted = true
      this.getViewExclusion(this.parameters, this.page, this.rows)

    }
  }

  getViewExclusion(parameter, page, rows) {
    this.monitoring.findViewExclusion(parameter, page, rows)
      .subscribe(response => {
        console.log(response)
        this.viewInclusion = response.content
        this.page = response.pageable.page_number
        this.totalElement = response.total_elements
        console.log(this.viewInclusion)
        this.isCompleted = false
      }, errorResponse => {
        this.isCompleted = false
        if (errorResponse.statusText != null &&
          errorResponse.statusText != undefined &&
          errorResponse.statusText == "Unknown Error") {
          this.message.openErrorMessage('API de monitoramente está indisponível.  ' +
            'URL: ' + errorResponse.url + '  ' +
            'Status: ' + errorResponse.status + '  ' +
            'Message: ' + errorResponse.statusText)
        } else {
          this.message.openErrorMessage('Falha na API de monitoramente.' +
            'URL: ' + errorResponse.url + '  ' +
            'Status: ' + errorResponse.status + '  ' +
            'Message: ' + errorResponse.statusText)
        }

      })
  }

  viewDetail(monitoring: any) {
    console.log(monitoring)

    this.contract = this.formatContract(this.parameters.contract)

    this.router.navigate([`/pse/monitoring-rmc/detail/${monitoring.id}/${monitoring.idFileControl}/${this.contract}`])
  }

  newPage(event: PageEvent) {
    this.page = event.pageIndex
    this.getViewExclusion(this.parameters, this.page, this.rows)
  }

  export() {

    let viewSuccess: any[] = []
    this.monitoring.findViewExclusion(this.parameters, 0, this.totalElement)
      .subscribe(response => {
        viewSuccess = response.content

        this.csvService.downloadFile(viewSuccess, this.displayedColumns2, 'report-dataprev-inclusion')

      }, errorResponse => {
        this.message.openErrorMessage('Falha ao tentar fazer download' + ": " + errorResponse.status + '-' + errorResponse.statusText)
      })

  }

  hasViewList(): boolean {
    if (this.viewInclusion.length > 0) {
      return true
    }
    return false;
  }

  formatContract(contract: string) {
    if (contract !== '' && contract != undefined) {
      if (contract.indexOf("/") > 0) {
        return contract.replace("/", "@")
      }
      return contract
    }
    return "*"
  }
}
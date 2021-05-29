import { Component, OnInit, Input, Output, EventEmitter, ViewChild, } from '@angular/core';
import { Param } from 'src/app/model/monitoring/Param';
import { MonitoringService } from 'src/app/services/monitoring/monitoring.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material';
import { CsvService } from 'src/app/services/csv/csv.service';
import { Page } from 'src/app/model/page/page';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-failure-rmc-detail',
  templateUrl: './failure-rmc-detail.component.html',
  styleUrls: ['./failure-rmc-detail.component.scss']
})
export class FailureRmcDetailComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  @Input() idFileControl: number
  @Input() contract: string

  viewFailureInclusion: any[] = []
  totalElement = 0
  page = 0
  rows = 10
  pageSizeOptions: number[] = [10]

  param: Param = new Param()

  displayedColumns: string[] = ['contract', 'hashOperation', 'message', 'dateHoraEndSuspension'];
  selection = new SelectionModel<any>(true, []);

  constructor(private monitoring: MonitoringService, private csvService: CsvService, private message: MessageService) { }

  getFailureDetailList(page: number, rows: number) {

    this.param.contract = this.contract
    this.param.idFileControl = this.idFileControl
    console.log('>>> ' + this.param)
    this.monitoring.findViewFailureExclusion(this.param, page, rows)
      .subscribe(response => {
        this.viewFailureInclusion = response.content
        this.page = response.pageable.page_number
        this.totalElement = response.total_elements
      }, errorResponse => {
        console.log(errorResponse)
      })
  }

  newPage(event: PageEvent) {
    this.page = event.pageIndex
    this.getFailureDetailList(this.page, this.rows)
  }

  export() {

    let viewFailure: any[] = []
    this.monitoring.findViewFailureExclusion(this.param, 0, this.totalElement)
      .subscribe(response => {
        viewFailure = response.content

        this.csvService.downloadFile(viewFailure, this.displayedColumns, 'report-dataprev-rejected')

      }, errorResponse => {
        this.message.openErrorMessage('Falha ao tentar fazer download' + ": " + errorResponse.status + '-' + errorResponse.statusText)
      })

  }

  ngOnInit(): void {
    console.log('FailureRmcDetailComponent >> ' + this.idFileControl + '   ' + this.contract)
    this.getFailureDetailList(this.page, this.rows)

    this.paginator._intl.itemsPerPageLabel="Itens por página";
  }
}
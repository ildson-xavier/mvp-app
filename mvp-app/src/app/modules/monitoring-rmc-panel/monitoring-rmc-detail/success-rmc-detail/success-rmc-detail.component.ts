import { Component, OnInit, Input, Output, EventEmitter, ViewChild, } from '@angular/core';
import { Param } from 'src/app/model/monitoring/Param';
import { MonitoringService } from 'src/app/services/monitoring/monitoring.service';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator, PageEvent } from '@angular/material';
import { CsvService } from 'src/app/services/csv/csv.service';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-success-rmc-detail',
  templateUrl: './success-rmc-detail.component.html',
  styleUrls: ['./success-rmc-detail.component.scss']
})
export class SuccessRmcDetailComponent implements OnInit {

  @Input() idFileControl: number
  @Input() contract: string

  viewSuccessInclusion: any[] = []
  totalElement = 0
  page = 0
  rows = 10
  pageSizeOptions: number[] = [10]

  param: Param = new Param()

  displayedColumns: string[] = ['contract', 'exclusionCompetence', 'hashOperation', 'codeSuccess', 'message'];
  selection = new SelectionModel<any>(true, []);

  constructor(private monitoring: MonitoringService, private csvService: CsvService,
    private message: MessageService) { }

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  getSuccessDetailList(page: number, rows: number) {
    /* let param = new Param() */
    this.param.contract = this.contract
    this.param.idFileControl = this.idFileControl
    console.log('>>> ' + this.param)
    this.monitoring.findViewSuccessExclusion(this.param, page, rows)
      .subscribe(response => {
        this.viewSuccessInclusion = response.content
        this.page = response.pageable.page_number
        this.totalElement = response.total_elements
        console.log(this.viewSuccessInclusion)
      }, errorResponse => {
        console.log(errorResponse)
      })
  }

  newPage(event: PageEvent) {
    this.page = event.pageIndex
    this.getSuccessDetailList(this.page, this.rows)
  }

  export() {

    let viewSuccess: any[] = []
    this.monitoring.findViewSuccessExclusion(this.param, 0, this.totalElement)
      .subscribe(response => {
        viewSuccess = response.content

        this.csvService.downloadFile(viewSuccess, this.displayedColumns, 'report-dataprev-success')

      }, errorResponse => {
        this.message.openErrorMessage('Falha ao tentar fazer download' + ": " + errorResponse.status + '-' + errorResponse.statusText)
      })

  }

  ngOnInit(): void {
    console.log('SuccessRmcDetailComponent >> ' + this.idFileControl + '   ' + this.contract)
    this.getSuccessDetailList(this.page, this.rows)

    this.paginator._intl.itemsPerPageLabel="Itens por p??gina";
  }
}
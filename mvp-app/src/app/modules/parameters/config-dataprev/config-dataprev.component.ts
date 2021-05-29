
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { ConfigGridDialogComponent } from './config-grid-dialog/config-grid-dialog.component';

import { AvailabilitySchedule } from '../../../model/parameter/AvailabilitySchedule'
import { EditServiceDialogComponent } from './edit-service-dialog/edit-service-dialog.component';
import { ParameterService } from 'src/app/services/parameters/parameter.service';
import { MessageService } from 'src/app/services/message/message.service';


@Component({
    selector: 'app-config-dataprev',
    templateUrl: './config-dataprev.component.html',
    styleUrls: ['./config-dataprev.component.scss']
  })
  export class ConfigDataprevComponent implements OnInit { 

    displayedColumns: string[] = ['position', 'service', 'hrBegin', 'hrEnd', 'businessDay', 'active'];

    panelOpenState = false;
    step = 0;

    @Output() valueEmitter = new EventEmitter<string>()
    @Output() editAvaliabilityEmitter = new EventEmitter<number>()

    availabilitySchedules : AvailabilitySchedule[] = [];
    headers: string [] = ['id','tpApi', 'hrBegin','hrEnd','stActive', 'bsDay'];

    constructor (public dialog: MatDialog, private parameterService: ParameterService, 
      private messageService: MessageService) {}


      // retornar uma valor (filho) emiter
    openGridDialog(): void {
      const dialogRef = this.dialog.open(ConfigGridDialogComponent, {
        width: '70%',
        disableClose: true,
        hasBackdrop: true,
        data: {name: 'close'}
      });

      dialogRef.afterClosed().subscribe(result => {
        let nome = result;
        if (nome === undefined) {
          this.openGridDialog()
        }
        console.log(nome)
        this.valueEmitter.emit(nome)
      });
    }

    openEditServiceDialog(availabilitySchedule : AvailabilitySchedule): void {
      const dialogRef = this.dialog.open(EditServiceDialogComponent, {
        width: '25%',
        disableClose: true,
        hasBackdrop: true,
        data: availabilitySchedule
      });

      dialogRef.afterClosed().subscribe(result => {
        let id = result;
        this.load();
        console.log(id)
        this.editAvaliabilityEmitter.emit(id);
      });

      console.log(availabilitySchedule)
    }

    ngOnInit(): void {
        console.log('ConfigDataprevComponent') 

        this.load();
      }

    load() {
      this.parameterService.findAllAvailability()
      .subscribe(response => {
        this.availabilitySchedules = response
        console.log('load')
        console.log(response)
      }, errorResponse => {
        if (errorResponse.status == 401 || errorResponse.status == 403) {
          this.messageService.openErrorMessage('Necessário de autenticar na aplicação' + ": " + errorResponse.status + '-' + errorResponse.statusText)
        }
        if (errorResponse.statusText != null && 
          errorResponse.statusText != undefined &&
          errorResponse.statusText == "Unknown Error") {
            this.messageService.openErrorMessage('API de configuração de disponbilidade da grade está indisponível.  ' + 
            'URL: '+errorResponse.url + '  ' + 
            'Status: '+errorResponse.status + '  ' +
            'Message: '+errorResponse.statusText)
          } else {
            this.messageService.openErrorMessage('Falha na API de configuração de disponibilidade da grade' + 
            'URL: '+errorResponse.url + '  ' +
            'Status: '+errorResponse.status + '  ' + 
            'Message: '+errorResponse.statusText)
          }
      })
    }
  }
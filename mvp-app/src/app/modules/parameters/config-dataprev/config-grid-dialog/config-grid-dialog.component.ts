
import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SelectionModel } from '@angular/cdk/collections';
import { FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup, Validators } from '@angular/forms';
import { ParameterService } from 'src/app/services/parameters/parameter.service';
import { UnavailabilitySchedule } from 'src/app/model/parameter/UnavailabilitySchedule';
import { MessageService } from 'src/app/services/message/message.service';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';

export interface DialogData {
  name: string;
}



@Component({
  selector: 'app-config-grid',
  templateUrl: './config-grid-dialog.component.html',
  styleUrls: ['./config-grid-dialog.component.scss']
})
export class ConfigGridDialogComponent implements OnInit {

  username: string

  displayedColumns: string[] = ['dtBegin', 'hrBegin', 'dtEnd', 'hrEnd', 'dsReason', 'actions'];
  selection = new SelectionModel<UnavailabilitySchedule>(true, []);

  unavailabilitySchedules: UnavailabilitySchedule[] = [];
  unavailabilitySchedule: UnavailabilitySchedule;
  selectUnavailabilitySchedule = new UnavailabilitySchedule();

  form: FormGroup;

  constructor(public fb: FormBuilder,
    public dialogRef: MatDialogRef<ConfigGridDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private parameterService: ParameterService,
    private messageService: MessageService,
    public dialog: MatDialog) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {
    this.clean()
    this.getUsername()
    console.log('ConfigGridDialogComponent')
    this.load()
  }

  getUsername() {
    this.username = localStorage.getItem('user')
  }

  submit() {
    console.log('submit() '+this.form.value)
    if (!this.form.value.id) {
      this.unavailabilitySchedule = this.form.value
      if (this.startDateShorterThanToday(this.validateDateFormat(this.form.value.dtBegin))) {
        if (this.endtDateShorterThanToday(this.validateDateFormat(this.form.value.dtEnd), this.validateDateFormat(this.form.value.dtBegin))) {
          this.unavailabilitySchedule.dtBegin = this.formatDate(this.validateDateFormat(this.form.value.dtBegin)) //this.formatDateToString(this.form.value.dtBegin)
          this.unavailabilitySchedule.dtEnd = this.formatDate(this.validateDateFormat(this.form.value.dtEnd))
          this.unavailabilitySchedule.hrBegin = this.validateTimeFormat(this.form.value.hrBegin)
          this.unavailabilitySchedule.hrEnd = this.validateTimeFormat(this.form.value.hrEnd)
          this.unavailabilitySchedule.nmUser = this.username

          console.log(this.unavailabilitySchedule)

          this.parameterService.saveUnavailability(this.unavailabilitySchedule).subscribe(response => {
            this.load()
            this.messageService.openSuccessMessage('Salvo com sucesso');
            this.clean()
          }, errorResponse => {
            console.log(errorResponse)
            this.messageService.openErrorMessage(errorResponse.status + ": " + errorResponse.message)

          })
        } 
      }
    } else {
      this.update()
    }



  }

  update() {
    console.log('update: ' + this.form.value)
    if (this.startDateShorterThanToday(this.formatDate(this.form.value.dtBegin))) {

      if (this.endtDateShorterThanToday(this.formatDate(this.form.value.dtEnd), this.formatDate(this.form.value.dtBegin))) {
        this.selectUnavailabilitySchedule.id = this.form.value.id
        this.selectUnavailabilitySchedule.dtBegin = this.formatDate(this.form.value.dtBegin)
        this.selectUnavailabilitySchedule.dtEnd = this.formatDate(this.form.value.dtEnd)
        this.selectUnavailabilitySchedule.dsReason = this.form.value.dsReason
        this.selectUnavailabilitySchedule.hrBegin = this.form.value.hrBegin
        this.selectUnavailabilitySchedule.hrEnd = this.form.value.hrEnd
        this.selectUnavailabilitySchedule.nmUser = this.username
    
        this.parameterService.updateUnavailability(this.selectUnavailabilitySchedule).subscribe(response => {
          this.load()
          this.messageService.openSuccessMessage('Atualizado com sucesso');
          this.clean()
        }, errorResponse => {
          console.log(errorResponse)
          this.messageService.openErrorMessage(errorResponse.status + ": " + errorResponse.message)
        })
      }
    }
  }

  loadForUpdate(unavailabilitySchedule: UnavailabilitySchedule) {
    console.log(unavailabilitySchedule)

    this.selectUnavailabilitySchedule.id = unavailabilitySchedule.id
    this.selectUnavailabilitySchedule.dtBegin = this.unformatDate(unavailabilitySchedule.dtBegin)
    this.selectUnavailabilitySchedule.dtEnd = this.unformatDate(unavailabilitySchedule.dtEnd)
    this.selectUnavailabilitySchedule.dsReason = unavailabilitySchedule.dsReason
    this.selectUnavailabilitySchedule.hrBegin = unavailabilitySchedule.hrBegin
    this.selectUnavailabilitySchedule.hrEnd = unavailabilitySchedule.hrEnd
    this.selectUnavailabilitySchedule.nmUser = unavailabilitySchedule.nmUser

    this.form.setValue(this.selectUnavailabilitySchedule)


  }

  delete(unavailabilitySchedule: UnavailabilitySchedule) {
    console.log(unavailabilitySchedule)
    unavailabilitySchedule.nmUser = this.username
    console.log(unavailabilitySchedule)
    this.openGridDialog(unavailabilitySchedule);

    /*       this.parameterService.deleteUnavailability(unavailabilitySchedule.id).subscribe(response => {
            this.messageService.openSuccessMessage('Deleta com sucesso');
          }, errorResponse => {
            this.messageService.openErrorMessage(errorResponse.error.messageError + ": " + errorResponse.error.technicalError)
          }) */
  }

  cancel() {
    this.clean()
  }

  load() {
    this.parameterService.findAllUnavailability().subscribe(response => this.unavailabilitySchedules = response)
  }

  clean() {
    this.form = this.fb.group({
      dtBegin: ['', Validators.required],
      hrBegin: ['', Validators.required],
      dtEnd: ['', Validators.required],
      hrEnd: ['', Validators.required],
      dsReason: ['', Validators.required],
      id: [''],
      nmUser: ['']

    })
  }

  openGridDialog(unavailabilitySchedule: UnavailabilitySchedule): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '15%',
      disableClose: true,
      hasBackdrop: true,
      data: { name: 'close' }
    });

    dialogRef.afterClosed().subscribe(result => {
      let action = result
      if (action === undefined) {
        this.parameterService.deleteUnavailability(unavailabilitySchedule.id, unavailabilitySchedule).subscribe(response => {
          this.messageService.openSuccessMessage('Deleta com sucesso');
          const arrayUnavailability = this.unavailabilitySchedules.filter(item => item !== unavailabilitySchedule)
          this.unavailabilitySchedules = []
          this.unavailabilitySchedules = arrayUnavailability

        }, errorResponse => {
          this.messageService.openErrorMessage(errorResponse.error.messageError + ": " + errorResponse.error.technicalError)
        })
      }
    });

  }

  /**
   * Funcoes auxiliares
   * @param date 
   */
  formatDate(date: string) {

    date = date.replace('/', '').replace('/', '')

    let dayformat = date.substring(0, 2)
    let monthformat = date.substring(2, 4)
    let yearformat = date.substring(4, 8)

    return [yearformat, monthformat, dayformat].join('-');
  }

  startDateShorterThanToday(dateParam: string) {
    console.log('startDateShorterThanToday')
    console.log(dateParam)
    let str = dateParam
    let date = new Date()
    if (str.indexOf('/') > 0) {
     date = new Date(str.split('/').reverse().join('/'));
    } else {
      let dd = str.split('-')
      date = new Date(parseInt(dd[0]), parseInt(dd[1])+1, parseInt[dd[2]]);
    }
    
    let otherDate = new Date()

  let newDate = new Date(otherDate.getFullYear(), otherDate.getMonth(), otherDate.getDate())

  if (date < newDate) {
    console.log(date + ' --- '+ newDate)
    this.messageService.openErrorMessage('A data de inicio não pode ser menor que a data atual.');
  } else {
    return dateParam
  }
}

  endtDateShorterThanToday(dateParam: string, dateBeginParam) {
    let str = dateParam
    let date = new Date()
    if (str.indexOf('/') > 0) {
     date = new Date(str.split('/').reverse().join('/'));
    } else {
      let dd = str.split('-')
      date = new Date(parseInt(dd[0]), parseInt(dd[1])+1, parseInt[dd[2]]);
    }

    let otherDate = new Date()

    let newDate = new Date(otherDate.getFullYear(), otherDate.getMonth(), otherDate.getDate())

    let strDate = dateBeginParam
    let dateBegin = new Date()
    if (str.indexOf('/') > 0) {
      dateBegin = new Date(strDate.split('/').reverse().join('/'));
    } else {
      let dd = strDate.split('-')
      dateBegin = new Date(parseInt(dd[0]), parseInt(dd[1])+1, parseInt[dd[2]]);
    }

    if (date < newDate) {
      this.messageService.openErrorMessage('A data de fim não pode ser menor que a data atual');
    } else if (date < dateBegin) {
      this.messageService.openErrorMessage('A data de fim não pode ser menor que a data de inicio');
    } else {
      return dateParam
    }
  }

  unformatDate(date: string) {
    let yearformat = date.substring(0, 4)
    let monthformat = date.substring(5, 7)
    let dayformat = date.substring(8, 10)

    return [dayformat, monthformat, yearformat].join('')

  }

  unformatDate2(date: string) {
    let yearformat = date.substring(0, 4)
    let monthformat = date.substring(5, 7)
    let dayformat = date.substring(8, 10)

    console.log(yearformat)
    console.log(monthformat)
    console.log(dayformat)

    let day = parseInt(dayformat) + 1

    console.log([yearformat, monthformat, day.toString()].join('-'))

    return [yearformat, monthformat, day.toString()].join('-')

  }

  formatDateToString(date: Date) {
    let day = date.getDate()
    let year = date.getFullYear()
    let month = date.getMonth() + 1

    let dayString = day.toString()
    let monthString = month.toString()

    if (day.toString().length == 1) {
      dayString = '0' + day.toString()
    }

    if (month.toString().length == 1) {
      monthString = '0' + month.toString()
    }
    return [year, monthString, dayString].join('-')

  }

  validateDateFormat(field: string) {
    let f = field;
    if (f.length > 10) {
      return f.substr(0, 10)
    }
    return f;
  }

  validateTimeFormat(field: string) {
    let f = field;
    if (f.length > 8) {
      return f.substr(0, 8)
    }
    return f;
  }
}
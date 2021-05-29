
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup, Validators } from '@angular/forms';
import { AvailabilitySchedule } from 'src/app/model/parameter/AvailabilitySchedule';
import { ParameterService } from 'src/app/services/parameters/parameter.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
    selector: 'app-edit-service',
    templateUrl: './edit-service-dialog.component.html',
    styleUrls: ['./edit-service-dialog.component.scss']
  })
export  class EditServiceDialogComponent implements OnInit  {

    form: FormGroup;
    username: string;

    constructor(public fb:FormBuilder,
      public dialogRef: MatDialogRef<EditServiceDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: AvailabilitySchedule,
        private parameterService: ParameterService,
        private router: Router,
        private messageService: MessageService) {}

    ngOnInit(): void {
      console.log('Ildson')
      console.log(this.data)
      this.getUsername()
      
      this.form = this.fb.group({
        id: [Validators.required],
        tpApi: [Validators.required],
        hrBegin: ['', Validators.required],
        hrEnd: ['', Validators.required],
        stActive: [false],
        bsDay: [false],
        nmUser: ['']

      })
        this.form.setValue(this.data)
        console.log('EditServiceDialogComponent') 
    }

    submit() {
      this.form.value.nmUser = this.username
      this.parameterService.updateAvailability(this.form.value)
      .subscribe (response => {
        this.messageService.openSuccessMessage('Atualizado com sucesso')
        this.router.navigate(['/pse/parameters'])
      }, errorResponse => {
        this.messageService.openErrorMessage(errorResponse.error.messageError + ": " + errorResponse.error.technicalError)
      })
    }

    getUsername() {
      this.username = localStorage.getItem('user')
      console.log('xavier')
      console.log(this.username)
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
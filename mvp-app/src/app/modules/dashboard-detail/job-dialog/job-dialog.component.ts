
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup, Validators } from '@angular/forms';
import { AvailabilitySchedule } from 'src/app/model/parameter/AvailabilitySchedule';
import { ParameterService } from 'src/app/services/parameters/parameter.service';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
    selector: 'app-job',
    templateUrl: './job-dialog.component.html',
    styleUrls: ['./job-dialog.component.scss']
  })
export  class JobDialogComponent implements OnInit  {

    form: FormGroup;
    username: string;

    constructor(public fb:FormBuilder,
      public dialogRef: MatDialogRef<JobDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: AvailabilitySchedule,
        private parameterService: ParameterService,
        private router: Router,
        private messageService: MessageService) {}

    ngOnInit(): void {

        console.log('JobDialogComponent') 
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
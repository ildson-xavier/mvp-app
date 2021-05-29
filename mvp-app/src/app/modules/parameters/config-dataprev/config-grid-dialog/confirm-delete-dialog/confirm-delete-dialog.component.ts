
import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup, Validators } from '@angular/forms';

export interface DialogData {
  name: string;
}

@Component({
    selector: 'app-edit-service',
    templateUrl: './confirm-delete-dialog.component.html',
    styleUrls: ['./confirm-delete-dialog.component.scss']
  })
export  class ConfirmDeleteDialogComponent implements OnInit  {

    form: FormGroup;

    constructor(
        public dialogRef: MatDialogRef<ConfirmDeleteDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    ngOnInit(): void {
    }

    submit() {
      
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
}
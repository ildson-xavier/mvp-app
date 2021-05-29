import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from 'src/app/modules/confirmation-dialog/confirmation-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor( private dialog: MatDialog ) { }

  openConfirmDialog(msg){
    return this.dialog.open(ConfirmationDialogComponent,{
       width: '390px',
       panelClass: 'confirm-dialog-container',
       disableClose: true,
       //position: { top: "10px" },
       position: { top: "15%"},
       data :{
         message : msg
       }
     });
   }
}

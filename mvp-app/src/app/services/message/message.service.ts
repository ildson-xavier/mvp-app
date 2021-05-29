import { Injectable } from '@angular/core'
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root'
})
export class MessageService {

    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

    constructor (private _snackBar: MatSnackBar) {}

    openSuccessMessage(message: string) {
        this._snackBar.open(message, 'Fechar', {
            duration: 15000,
            panelClass: ['panel-success-class'],
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }

    openErrorMessage(message: string) {
        this._snackBar.open(message, 'Fechar', {
            duration: 15000,
            panelClass: ['panel-error-class'],
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
        });
    }
    

}
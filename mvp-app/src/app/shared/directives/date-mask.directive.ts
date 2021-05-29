import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';
import { partition } from 'rxjs';

@Directive({
    selector: '[formControlName][appDateMask]'
  })
export class DateMaskDirective {

    constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
      console.log('onModelChange')
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    console.log('keydownBackspace')
    this.onInputChange(event.target.value, true);
  }
  

  onInputChange(event, backspace) {
    console.log(typeof (event))

    if (typeof (event) == 'object') {
      return event
     }


   /*  if (typeof (event) == 'string') { */

      let newVal = event.replace(/\D/g, '');
      if (backspace && newVal.length <= 6) {
        newVal = newVal.substring(0, newVal.length - 1);
      }
      if (newVal.length === 0) {
        newVal = '';
      } else if (newVal.length <= 2) {
        newVal = newVal.replace(/^(\d{0,2})/, '$1/');
      } else if (newVal.length <= 6) {
        newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1/$2');
      } else if (newVal.length <= 8) {
        newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');
      } else {
        newVal = newVal.substring(0, 8);
        newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,4})/, '$1/$2/$3');

        let day = newVal.substring(0,2)
        let month = newVal.substring(3,5)
        let year = newVal.substring(6,10)

        if (!new Date(year, day, month).getTime()){
          newVal = '';
        } 

        if ((parseInt(day) > 31 || parseInt(day) < 0) ||
        (parseInt(month) > 12 || parseInt(month) < 0)) {
          newVal = '';
        }
      }

      this.ngControl.valueAccessor.writeValue(newVal);
    /* } */
    
  }

}


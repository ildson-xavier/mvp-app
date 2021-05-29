import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[formControlName][appDateMaskCustom]'
  })
export class DateMaskCustomDirective {

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
        newVal = newVal.replace(/^(\d{0,2})(\d{0,4})/, '$1/$2');
      } else {
        newVal = newVal.substring(0, 6);
        newVal = newVal.replace(/^(\d{0,2})(\d{0,4})/, '$1/$2');

        let month = newVal.substring(0,2)
        let year = newVal.substring(3,7)

        console.log(new Date(year, 1, month).getTime())
        if (!new Date(year, 1, month).getTime()){
          newVal = '';
        } 

        if ((parseInt(month) > 12 || parseInt(month) < 0)) {
          newVal = '';
        }
      }

      this.ngControl.valueAccessor.writeValue(newVal);
    /* } */
    
  }

}


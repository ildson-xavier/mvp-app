import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[formControlName][appTimeMask]'
  })
export class TimeMaskDirective {

    constructor(public ngControl: NgControl) { }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(event) {
    this.onInputChange(event, false);
  }

  @HostListener('keydown.backspace', ['$event'])
  keydownBackspace(event) {
    this.onInputChange(event.target.value, true);
  }
  

  onInputChange(event, backspace) {
    let newVal = event.replace(/\D/g, '');
    if (backspace && newVal.length <= 6) {
      newVal = newVal.substring(0, newVal.length - 1);
    }
    if (newVal.length === 0) {
      newVal = '';
    } else if (newVal.length <= 2) {
      newVal = newVal.replace(/^(\d{0,2})/, '$1:');
    } else if (newVal.length <= 4) {
      newVal = newVal.replace(/^(\d{0,2})(\d{0,2})/, '$1:$2');
    } else {
      newVal = newVal.substring(0, 6);
      newVal = newVal.replace(/^(\d{0,2})(\d{0,2})(\d{0,2})/, '$1:$2:$3');

      let hr = parseInt(newVal.substring(0,2))
      let min = parseInt(newVal.substring(3,5))
      let sec = parseInt(newVal.substring(6,8))

      if ((hr < 0 || hr > 23) || (min < 0 || min > 59) || (sec < 0 || sec > 59)) {
        newVal = '';
      }

      console.log(newVal)
    }
    this.ngControl.valueAccessor.writeValue(newVal);
  }
}
import { Component, OnInit, ViewChild, EventEmitter, Output, } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, FormsModule, NgControl, FormGroup, Validators } from '@angular/forms';
import { Param } from 'src/app/model/monitoring/Param';

@Component({
    selector: 'app-monitoring-form',
    templateUrl: './monitoring-form.component.html',
    styleUrls: ['./monitoring-form.component.scss']
  })
export class MonitoringFormComponent implements OnInit{

  params: Param
  form: FormGroup

  isFilled: Date = null

  @Output() paramEmitter = new EventEmitter<Param>()

  constructor (private fb:FormBuilder) {}
    
  ngOnInit(): void {
      console.log('MonitoringFormComponent') 
      this.clean()
  }

  isTrue() {
    return this.isFilled != null
  }


  submit() {

    this.params = new Param()
    this.params.contract = this.form.value.contract
    this.params.dtBegin = this.form.value.dtBegin
    this.params.dtEnd = this.form.value.dtEnd
    this.params.reference = this.form.value.reference
    this.params.idFileControl = this.form.value.idFileControl

    console.log(this.params)

    this.paramEmitter.emit(this.params)
    this.clean()
  }

  emitterParam(param) {
    this.paramEmitter.emit(param)
  }

  clean() {
    this.form = this.fb.group({
      contract: [''],
      dtBegin: [null],
      dtEnd: [null],
      reference: [''],
      idFileControl: [null]
    })
  }

}
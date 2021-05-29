import { Component, OnInit, ViewChild, Input, } from '@angular/core';
import { MonitoringFormComponent } from './monitoring-form/monitoring-form.component';
import { Param } from 'src/app/model/monitoring/Param';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring-panel.component.html',
  styleUrls: ['./monitoring-panel.component.scss']
})
export class MonitoringPanelComponent implements OnInit {


  @Input() param: Param;

  paramEmitter: Param

  constructor(private router: Router) { }

  emitterParam(event) {
    this.paramEmitter = event
    console.log(this.paramEmitter)
  }
  ngOnInit(): void {
    console.log('MonitoringPanelComponent')
  }

  backHome() {
    this.router.navigate(['/pse']);
  }
}
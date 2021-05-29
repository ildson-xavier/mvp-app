import { Component, OnInit, ViewChild, Input, } from '@angular/core';
import { MonitoringRmcFormComponent } from './monitoring-rmc-form/monitoring-rmc-form.component';
import { Param } from 'src/app/model/monitoring/Param';
import { Router } from '@angular/router';

@Component({
  selector: 'app-monitoring-rmc',
  templateUrl: './monitoring-rmc-panel.component.html',
  styleUrls: ['./monitoring-rmc-panel.component.scss']
})
export class MonitoringRmcPanelComponent implements OnInit {


  @Input() param: Param;

  paramEmitter: Param

  constructor(private router: Router) { }

  emitterParam(event) {
    this.paramEmitter = event
    console.log(this.paramEmitter)
  }
  ngOnInit(): void {
    console.log('MonitoringRmcPanelComponent')
  }

  backHome() {
    this.router.navigate(['/pse']);
  }
}
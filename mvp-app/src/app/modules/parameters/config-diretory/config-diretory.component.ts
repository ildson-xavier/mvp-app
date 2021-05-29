
import { Component, OnInit, ViewChild } from '@angular/core';
import { ParameterService } from 'src/app/services/parameters/parameter.service';
import { GeneralParameters } from 'src/app/model/parameter/GeneralParameters';

@Component({
    selector: 'app-config-diretory',
    templateUrl: './config-diretory.component.html',
    styleUrls: ['./config-diretory.component.scss']
  })
export class ConfigDiretoryComponent implements OnInit {

    generalParameters: GeneralParameters[] = [];

    constructor(private parameterService: ParameterService) {}

    ngOnInit(): void {
        console.log('ConfigDataprevComponent') 
        this.parameterService.findDiretories().subscribe(response => {
          this.generalParameters = response
        }, errorResponse => {
          console.log('Erro ao buscar parametros de diretorios '+ errorResponse)
        })
    }
}
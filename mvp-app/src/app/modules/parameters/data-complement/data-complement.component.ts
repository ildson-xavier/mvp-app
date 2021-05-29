
import { Component, Input, OnInit, ViewChild, SimpleChange } from '@angular/core';
import { ParameterService } from 'src/app/services/parameters/parameter.service';
import { ViewAdditionalData } from 'src/app/model/parameter/ViewAdditionalData';
import { MessageService } from 'src/app/services/message/message.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-data-complement',
    templateUrl: './data-complement.component.html',
    styleUrls: ['./data-complement.component.scss']
  })
export class DataComplementComponent implements OnInit {

    value = '';
    @Input() valeuEmitter: string
    @Input() editAvaliabilityEmitter: number

    viewAdditionalData: ViewAdditionalData[] = []
    
    constructor(
        private parameterService: ParameterService,
        private messageService: MessageService,
        private router: Router,
        private route:ActivatedRoute) { }

    ngOnInit(): void {
        console.log('dataComplementComponent') 
        this.parameterService.findAdditionalData().subscribe(response => {
            this.viewAdditionalData = this.createNewArray(response)
        }, errorResponse => {
            console.log('Error: '+errorResponse);
        })
        /* this.updateData() */
    }

    ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
        if (changes['valeuEmitter'] != undefined && changes['valeuEmitter'].currentValue == 'close') {
            this.viewAdditionalData = []
            this.ngOnInit() 
        } 

        if (changes['editAvaliabilityEmitter'] != undefined && changes['editAvaliabilityEmitter'].currentValue > 0) {
            this.viewAdditionalData = []
            this.ngOnInit()
        }
    }

    createNewArray(viewAdditionalData: ViewAdditionalData[]) {

        if (viewAdditionalData.length > 0) {
            viewAdditionalData[0].labelDate = 'Data/Hora Cadastro'
            viewAdditionalData[0].labelResp = 'Resp. pelo Cadastro'

            if (viewAdditionalData.length > 1) {
                viewAdditionalData[1].labelDate = 'Data/Hora da Última Manutenção'
                viewAdditionalData[1].labelResp = 'Resp. pela Última Manutenção'
            }
        }
        return viewAdditionalData
    }

    updateData() {

        /* setInterval(() => { */
/*                 this.viewAdditionalData = []
 */                this.parameterService.findAdditionalData().subscribe(response => {
                    this.viewAdditionalData = []
                    this.viewAdditionalData = this.createNewArray(response)
                }, errorResponse => {
                    this.messageService.openErrorMessage(errorResponse.error.messageError + ": " + errorResponse.error.technicalError)
                    console.log('Error: '+errorResponse);
                })
            /* }, 20000); */

    }
}
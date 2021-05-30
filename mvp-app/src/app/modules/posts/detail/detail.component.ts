import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
		selector: 'app-detail',
		templateUrl: './detail.component.html',
		styleUrls: ['./detail.component.scss']
})

export class DetailComponent implements OnInit {

	@ViewChild (MatAccordion) accordion: MatAccordion;


	panelOpenState = false;
	step = 0;

	options: FormGroup;
	hideRequiredControl = new FormControl(false);
	floatLabelControl = new FormControl('auto');
  
	constructor(fb: FormBuilder) {
	  this.options = fb.group({
		hideRequired: this.hideRequiredControl,
		floatLabel: this.floatLabelControl,
	  });
	}

	ngOnInit(): void {
		console.log('')
	  }
}

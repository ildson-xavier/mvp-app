import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Login } from 'src/app/model/login/login';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {


  constructor(private router: Router, private authService: AuthService) { }
  
  ngOnInit(): void {
    console.log('ErrorComponent')
   }

   login() {
    this.authService.logout()
   }


}
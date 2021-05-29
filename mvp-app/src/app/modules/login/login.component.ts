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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;  
  isTrue: boolean = false;
  erro: any;

  login: Login

  constructor(
    private authService:AuthService, 
    private router: Router,
    private toastr: ToastrService,
    private spinnerService: NgxSpinnerService,
    private messageService: MessageService
  ) { }
  
  ngOnInit(): void {
    localStorage.clear();
    this.initForm();
    this.spinnerService.hide();
   }

  initForm(){
    this.formGroup = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }

  changeTheme () {
    this.isTrue = !this.isTrue;
  }
  
  loginProcess(){
    if(this.formGroup.valid){

      this.spinnerService.show();

      this.login = new Login()
      this.login.username = this.formGroup.value.login
      this.login.password = this.formGroup.value.password

      console.log(this.formGroup.value.login + ' - ' + this.formGroup.value.password)

/*       this.authService.login(this.login)
      .subscribe(response => {
        console.log(response) */
        //this.setCredentials(this.login.username, response.access_token)

       localStorage.setItem('user', this.login.username);
       this.router.navigate(['/pse']);
/* 
      }, errorResponse => {
        console.log('errorResponse >> '+ JSON.stringify(errorResponse))
        this.messageService.openErrorMessage(errorResponse.error.messageError + ": " + errorResponse.error.technicalError)
        this.spinnerService.hide();
        this.router.navigate(['/login']);
      }) */
    
    }
  }

  setCredentials(username: string, token: string) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', username);

    let jwt = this.parseJwt(token)
    localStorage.setItem('roles', jwt.role);

    console.log('jwt >> '+JSON.stringify(jwt));

  }
  parseJwt(token: string) {
    var payload = token.split('.')[1];
    payload = payload.replace('-', '+').replace('_', '/');
    return JSON.parse(window.atob(payload));
}
}
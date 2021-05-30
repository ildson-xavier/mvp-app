import { EventEmitter, Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Version } from 'src/app/model/version/version';
import { VersionService } from 'src/app/services/version/version.service';
import { LoguserService } from 'src/app/services/loguser/loguser.service';
import { LogUser } from 'src/app/model/loguser/LogUser';
import { KeycloakService } from 'keycloak-angular';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  
  now:number
  versionApp: string
  username: string
  loguser: LogUser
  lastAccess: string

  constructor(private router: Router, private versionService: VersionService, 
    private logUserService: LoguserService,
    private authService: AuthService) { 

    setInterval(() => {
      this.now = new Date().getTime()
      }, 1000);
  }

  ngOnInit() { 
    this.getUsername()
    this.getVersion()
    //this.getLoguser()

/*     this.saveLogUser() */
    
  }


  getUsername() {
    this.username =  'Bruno' //this.authService.getUsername()
    localStorage.setItem('user', this.username);
  }

  getLoguser() {
    this.logUserService.getLoguser(this.username)
    .subscribe(response => {
      this.loguser = response
      console.log('getLoguser >>> '+ JSON.stringify(this.loguser))
      if (this.loguser.userName == null) {
        console.log('ildson')
        this.loguser = new LogUser()
        this.loguser.userName = this.username
        let dat = new Date().getTime()
        console.log(dat)
        this.loguser.dtInclusion = dat.toString()
        console.log(this.loguser)
      }
      this.lastAccess = this.loguser.dtInclusion

      this.saveLogUser()

    }, errorResponse => {
      console.log(errorResponse)
    })
  }

  saveLogUser() {
    let logserNew = new LogUser()
    logserNew.userName = this.username
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth() + 1
    let year = date.getFullYear()

    let dayString = day.toString()
    let monthString  = month.toString()

    if (dayString.length < 2) {
      dayString = '0'+dayString
    }

    if (monthString.length < 2) {
      monthString = '0'+monthString
    }

    //logserNew.dtInclusion = [year, monthString, dayString].join('-')
    logserNew.dtInclusion = new Date().getTime().toString()

    console.log('saveLogUser > '+logserNew)

    this.logUserService.saveLogUser(logserNew).subscribe(response => {
      console.log(response)
    }, errorResponse => {
      console.log(errorResponse)
    })
  }

  getVersion() {
/*      this.versionService.getVersion()
     .subscribe(response => {
       console.log('getVersion >> '+response)
        this.versionApp = response.version
     }, errorResponse => {
       console.log(errorResponse)
     })  */

     this.versionApp = '1.0.0'
  }

  toggleSideBar() {
    this.toggleSideBarForMe.emit();
  }

  logout() {
    localStorage.clear;
    //this.authService.logout()
  }

  getDate() : string {
    let date = new Date()

    return ''
  }
}

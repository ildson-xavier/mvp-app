import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Version } from 'src/app/model/version/version';
import { baseUrl, baseLocalUrlParameter } from 'src/environments/environment';
import { LogUser } from 'src/app/model/loguser/LogUser';

@Injectable({
    providedIn: 'root'
})
export class LoguserService {
    
    constructor (private http: HttpClient) {}

    getLoguser(user: string) : Observable<LogUser> {
        return this.http.get<LogUser>(`${baseLocalUrlParameter}loguser/${user}`)
    }

    saveLogUser(logUser: LogUser) : Observable<any> {
        return this.http.post<any>(`${baseLocalUrlParameter}loguser`, logUser)
    }
}
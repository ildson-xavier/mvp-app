import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Version } from 'src/app/model/version/version';
import { baseUrl, baseLocalUrlParameter } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class VersionService {
    
    constructor (private http: HttpClient) {}

    getVersion() : Observable<Version> {
        return this.http.get<Version>(`${baseLocalUrlParameter}version`)
    }
}
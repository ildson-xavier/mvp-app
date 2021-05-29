import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private router: Router
    ) { }

    intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

/*         const access_token = localStorage.getItem('token')
        // console.log(access_token ) 
        if ( access_token ) {
            // console.log(access_token) 
            req = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + access_token)
            });

        } */

        req = req.clone({
            headers: req.headers
            .set('rejectUnauthorized', 'false ')
            .set('insecure', 'true')
            .set('requestCert', 'false')
        });
        return next.handle(req)

    } 
}
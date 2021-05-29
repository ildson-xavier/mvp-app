import { Injectable } from '@angular/core'
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Param } from 'src/app/model/monitoring/Param';
import { baseUrl, baseLocalUrlRequestDetails } from 'src/environments/environment';
import { Util } from 'src/app/shared/util/util';

@Injectable({
    providedIn: 'root'
})
export class MonitoringService {

    constructor (private http: HttpClient) {}

    findViewInclusion(parameter: Param, page: number, rows: number) : Observable<any> {
        let dat = new Util()
        const param = {
        params: new HttpParams()
        .set('page', page.toString())
        .set('rows', rows.toString())
        .set('contract', parameter.contract == undefined ? '' : parameter.contract)
        .set('dtBegin', parameter.dtBegin != null ? dat.getConvertDateToString(parameter.dtBegin) : '')
        .set('dtEnd', parameter.dtEnd != null ? dat.getConvertDateToString(parameter.dtEnd): '')
        .set('reference', parameter.reference == undefined ? '' : parameter.reference)
        .set('idFileControl', parameter.idFileControl != null ? parameter.idFileControl.toString(): '0') }

        return this.http.get<any>(`${baseLocalUrlRequestDetails}viewinclusion`, param)
    }

    findViewExclusion(parameter: Param, page: number, rows: number) : Observable<any> {
        let dat = new Util()
        const param = {
        params: new HttpParams()
        .set('page', page.toString())
        .set('rows', rows.toString())
        .set('contract', parameter.contract == undefined ? '' : parameter.contract)
        .set('dtBegin', parameter.dtBegin != null ? dat.getConvertDateToString(parameter.dtBegin) : '')
        .set('dtEnd', parameter.dtEnd != null ? dat.getConvertDateToString(parameter.dtEnd): '')
        .set('reference', parameter.reference == undefined ? '' : parameter.reference)
        .set('idFileControl', parameter.idFileControl != null ? parameter.idFileControl.toString(): '0') }

        return this.http.get<any>(`${baseLocalUrlRequestDetails}viewexclusion`, param)
    }

    findViewSuccessInclusion(parameter: Param, page: number, rows: number) : Observable<any> {
        let dat = new Util()
        const param = {
        params: new HttpParams()
        .set('page', page.toString())
        .set('rows', rows.toString())
        .set('contract', parameter.contract == undefined ? '' : parameter.contract)
        .set('dtBegin', parameter.dtBegin != null ? dat.getConvertDateToString(parameter.dtBegin) : '')
        .set('dtEnd', parameter.dtEnd != null ? dat.getConvertDateToString(parameter.dtEnd): '')
        .set('reference', parameter.reference == undefined ? '' : parameter.reference)
        .set('idFileControl', parameter.idFileControl != null ? parameter.idFileControl.toString(): '0') }

        return this.http.get<any>(`${baseLocalUrlRequestDetails}viewinsuccessclusion`, param)
    }

    findViewSuccessExclusion(parameter: Param, page: number, rows: number) : Observable<any> {
        let dat = new Util()
        const param = {
        params: new HttpParams()
        .set('page', page.toString())
        .set('rows', rows.toString())
        .set('contract', parameter.contract == undefined ? '' : parameter.contract)
        .set('dtBegin', parameter.dtBegin != null ? dat.getConvertDateToString(parameter.dtBegin) : '')
        .set('dtEnd', parameter.dtEnd != null ? dat.getConvertDateToString(parameter.dtEnd): '')
        .set('reference', parameter.reference == undefined ? '' : parameter.reference)
        .set('idFileControl', parameter.idFileControl != null ? parameter.idFileControl.toString(): '0') }

        return this.http.get<any>(`${baseLocalUrlRequestDetails}viewsuccessexclusion`, param)
    }

    findViewFailureInclusion(parameter: Param, page: number, rows: number) : Observable<any> {
        let dat = new Util()
        const param = {
        params: new HttpParams()
        .set('page', page.toString())
        .set('rows', rows.toString())
        .set('contract', parameter.contract == undefined ? '' : parameter.contract)
        .set('dtBegin', parameter.dtBegin != null ? dat.getConvertDateToString(parameter.dtBegin) : '')
        .set('dtEnd', parameter.dtEnd != null ? dat.getConvertDateToString(parameter.dtEnd): '')
        .set('reference', parameter.reference == undefined ? '' : parameter.reference)
        .set('idFileControl', parameter.idFileControl != null ? parameter.idFileControl.toString(): '0') }

        return this.http.get<any>(`${baseLocalUrlRequestDetails}viewinfailureclusion`, param)
    }

    findViewFailureExclusion(parameter: Param, page: number, rows: number) : Observable<any> {
        let dat = new Util()
        const param = {
        params: new HttpParams()
        .set('page', page.toString())
        .set('rows', rows.toString())
        .set('contract', parameter.contract == undefined ? '' : parameter.contract)
        .set('dtBegin', parameter.dtBegin != null ? dat.getConvertDateToString(parameter.dtBegin) : '')
        .set('dtEnd', parameter.dtEnd != null ? dat.getConvertDateToString(parameter.dtEnd): '')
        .set('reference', parameter.reference == undefined ? '' : parameter.reference)
        .set('idFileControl', parameter.idFileControl != null ? parameter.idFileControl.toString(): '0') }

        return this.http.get<any>(`${baseLocalUrlRequestDetails}viewfailureexclusion`, param)
    }

    getViewInclusionById(id: number) : Observable<any> {
        return this.http.get<any>(`${baseLocalUrlRequestDetails}viewinclusion/${id}`)
    }

    getViewExclusionById(id: number) : Observable<any> {
        return this.http.get<any>(`${baseLocalUrlRequestDetails}viewexclusion/${id}`)
    }
}
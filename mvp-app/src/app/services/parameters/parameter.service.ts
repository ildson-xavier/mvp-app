import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AvailabilitySchedule } from 'src/app/model/parameter/AvailabilitySchedule';
import { baseUrl, baseLocalUrlParameter } from 'src/environments/environment';
import { UnavailabilitySchedule } from 'src/app/model/parameter/UnavailabilitySchedule';
import { ViewAdditionalData } from 'src/app/model/parameter/ViewAdditionalData';
import { GeneralParameters } from 'src/app/model/parameter/GeneralParameters';

@Injectable({
    providedIn: 'root'
})
export class ParameterService {

    constructor (private http: HttpClient) {}

    findAllAvailability(): Observable<AvailabilitySchedule[]> {
        return this.http.get<AvailabilitySchedule[]>(`${baseLocalUrlParameter}availability`)
    }

    updateAvailability(availabilitySchedule: AvailabilitySchedule): Observable<any> {
        return this.http.put<any>(`${baseLocalUrlParameter}availability/${availabilitySchedule.id}`, availabilitySchedule)
    }

    findAllUnavailability(): Observable<UnavailabilitySchedule[]> {
        return this.http.get<UnavailabilitySchedule[]>(`${baseLocalUrlParameter}unavailability`)
    }

    deleteUnavailability(id: number, unavailabilitySchedule: UnavailabilitySchedule): Observable<any> {
        const options = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json'
            }),
            body: unavailabilitySchedule
          }
        return this.http.delete<any>(`${baseLocalUrlParameter}unavailability/${id}`, options )
    }

    updateUnavailability(unavailabilitySchedule: UnavailabilitySchedule): Observable<any> {
        return this.http.put<any>(`${baseLocalUrlParameter}unavailability/${unavailabilitySchedule.id}`, unavailabilitySchedule)
    }

    saveUnavailability(unavailabilitySchedule: UnavailabilitySchedule): Observable<any> {
        return this.http.post<any>(`${baseLocalUrlParameter}unavailability/`, unavailabilitySchedule)
    }

    findAdditionalData(): Observable<ViewAdditionalData[]> {
        return this.http.get<ViewAdditionalData[]>(`${baseLocalUrlParameter}addtionaldata`)
    }

    findDiretories(): Observable<GeneralParameters[]> {
        return this.http.get<GeneralParameters[]>(`${baseLocalUrlParameter}parameters`)
    }
}
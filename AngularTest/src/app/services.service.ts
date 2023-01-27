import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class ServicesService {


    private baseUri: string = "http://localhost:3000/";

    private headers = new HttpHeaders().set('Content-Type', 'Application/json');


    constructor(private http: HttpClient) { }

    allRecords(): Observable<any> {
        return this.http.get<any>(this.baseUri + 'record/records', { headers: this.headers }).pipe(map(data => {
            return data;
        }))
    }


}

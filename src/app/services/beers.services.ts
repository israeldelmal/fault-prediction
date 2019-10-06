import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { endPonit } from './endpoint';
import { IBeerType } from '../models/beertype.model';

@Injectable({
    providedIn: 'root'
})
export class ServiceBeersType {
    api = endPonit + 'beertype';

    constructor(
        private http: HttpClient,
        private headers: HttpHeaders
    ) {}

    getBeersType() {
        const headers = new HttpHeaders({
            'Content-Type': 'application/json'
        });

        return this.http.get<IBeerType[]>(this.api, {
            headers: headers
        });
    }
}
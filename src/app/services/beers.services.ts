import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { endPonit } from './endpoint';
import { IBeerType } from '../models/beertype.model';

@Injectable({
    providedIn: 'root'
})
export class ServiceBeersType {
    api = endPonit + 'beer-type';

    constructor(
        private http: HttpClient
    ) {}

    getBeersType() {
        return this.http.get<IBeerType[]>(this.api);
    }
}
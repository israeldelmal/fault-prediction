import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { endPonit } from './endpoint';
import { ICooks } from '../models/cooks.model';

@Injectable({
    providedIn: 'root'
})
export class ServiceCooks {
    api = endPonit + 'machine/cocimientos';

    constructor(
        private http: HttpClient
    ) {}

    getCooks() {
        return this.http.get<ICooks[]>(this.api);
    }
}
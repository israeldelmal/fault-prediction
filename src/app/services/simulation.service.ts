import { Injectable } from "@angular/core";
import { endPonit } from './endpoint';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SimulationService {
    api = endPonit + 'simulation';

    constructor(
        private http: HttpClient
    ) { }

    postSimulation(
        beerType: any,
        hl: any,
        date: any,
        time: any
    ) {
        let dataJson = [
            {
                "beer": beerType,
                "hl": hl,
                "date": date,
                "time": time
            }
        ]

        return this.http.post(this.api, dataJson);
    }
}
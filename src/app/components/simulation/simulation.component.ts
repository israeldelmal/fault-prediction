import { Component } from "@angular/core";
import { DaysData } from './data/data';
import { MachineJson } from './data/json';

@Component({
    selector: 'app-simulator',
    templateUrl: './simulation.component.html',
    styleUrls: ['./simulation.component.scss']
})
export class SimulationComponent {
    daysData = {};

    constructor() {
        let data = JSON.parse('{"initialDate":"2019-10-08T00:00:00.000Z","finishDate":"2019-10-18T16:00:00.000Z","machines":[{"machine":"MOLINOS","fault":5,"faultDate":false,"initialDate":"2019-10-08T00:00:00.000Z","finishDate":"2019-10-08T03:00:00.000Z","hours":2},{"machine":"COCEDOR","fault":2,"faultDate":false,"initialDate":"2019-10-08T02:00:00.000Z","finishDate":"2019-10-08T04:00:00.000Z","hours":1},{"machine":"MACERADOR 1","fault":1,"faultDate":false,"initialDate":"2019-10-08T03:00:00.000Z","finishDate":"2019-10-08T06:00:00.000Z","hours":1},{"machine":"FILTRO","fault":2,"faultDate":false,"initialDate":"2019-10-08T04:00:00.000Z","finishDate":"2019-10-08T07:00:00.000Z","hours":2},{"machine":"CENTRIFUGADORA","fault":3,"faultDate":false,"initialDate":"2019-10-08T06:00:00.000Z","finishDate":"2019-10-08T09:00:00.000Z","hours":1},{"machine":"ENFRIADOR","fault":2,"faultDate":false,"initialDate":"2019-10-08T07:00:00.000Z","finishDate":"2019-10-15T09:00:00.000Z","hours":2},{"machine":"TANQUE FERMENTACIÓN","fault":1,"faultDate":false,"initialDate":"2019-10-08T09:00:00.000Z","finishDate":"2019-10-15T11:00:00.000Z","hours":168},{"machine":"ENFIRADOR","fault":3,"faultDate":false,"initialDate":"2019-10-15T09:00:00.000Z","finishDate":"2019-10-15T12:00:00.000Z","hours":2},{"machine":"CENTRIFUGADOR","fault":3,"faultDate":false,"initialDate":"2019-10-15T11:00:00.000Z","finishDate":"2019-10-18T12:00:00.000Z","hours":1},{"machine":"TANQUE UNIVERSAL","fault":1,"faultDate":false,"initialDate":"2019-10-15T12:00:00.000Z","finishDate":"2019-10-18T13:00:00.000Z","hours":72},{"machine":"PRE-FILTRACIÓN","fault":3,"faultDate":false,"initialDate":"2019-10-18T12:00:00.000Z","finishDate":"2019-10-18T14:00:00.000Z","hours":1},{"machine":"FILTRO","fault":2,"faultDate":false,"initialDate":"2019-10-18T13:00:00.000Z","finishDate":"2019-10-18T15:00:00.000Z","hours":1},{"machine":"FILTRO DE MEMBRANA","fault":2,"faultDate":false,"initialDate":"2019-10-18T14:00:00.000Z","finishDate":"2019-10-18T16:00:00.000Z","hours":1},{"machine":"CARBOBLENDER","fault":2,"faultDate":true,"initialDate":"2019-10-18T15:00:00.000Z","finishDate":"2019-10-18T16:00:00.000Z","hours":1}]}');
        this.daysData = data.machines;
    }
}
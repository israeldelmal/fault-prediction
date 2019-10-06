import { Component } from "@angular/core";
import { DaysData } from './data/data';

@Component({
    selector: 'app-simulator',
    templateUrl: './simulation.component.html',
    styleUrls: [ './simulation.component.scss' ]
})
export class SimulationComponent {
    daysData = DaysData;
}
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceBeersType } from 'src/app/services/beers.services';
import { IBeerType } from 'src/app/models/beertype.model';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    // API
    beersType: IBeerType[];

    // Formularios
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    thirdFormGroup: FormGroup;
    fourthFormGroup: FormGroup;
    fifthFormGroup: FormGroup;

    constructor(
        private _formBuilder: FormBuilder,
        private _beersType: ServiceBeersType
    ) { }

    // Funciones para extraer los controles de un Form
    get first() {
        return this.firstFormGroup.controls
    }

    get second() {
        return this.secondFormGroup.controls
    }

    get third() {
        return this.thirdFormGroup.controls
    }

    get fourth() {
        return this.fourthFormGroup.controls
    }

    get fifth() {
        return this.fifthFormGroup.controls
    }

    ngOnInit() {
        this.firstFormGroup = this._formBuilder.group({
            beer: ['', Validators.required]
        });
        this.secondFormGroup = this._formBuilder.group({
            machine: ['', Validators.required]
        });
        this.thirdFormGroup = this._formBuilder.group({
            hl: ['', Validators.required]
        });
        this.fourthFormGroup = this._formBuilder.group({
            date: ['', Validators.required]
        });
        this.fifthFormGroup = this._formBuilder.group({
            time: ['', Validators.required]
        });
        // API
        return this._beersType.getBeersType()
            .subscribe(data => this.beersType = data);
    }

    resetForm() {
        this.first['beer'].setValue('');
        this.second['machine'].setValue('');
        this.third['hl'].setValue('');
        this.fourth['date'].setValue('');
        this.fifth['time'].setValue('');
    }
}
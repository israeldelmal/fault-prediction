import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { SimulationComponent } from './simulation.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';

const routes: Routes = [
    {
        path: '',
        component: SimulationComponent
    }
]

@NgModule({
    declarations: [
        SimulationComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MaterialModule
    ]
})
export class SimulationModule {}
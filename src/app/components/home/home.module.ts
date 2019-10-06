import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AmazingTimePickerModule } from 'amazing-time-picker';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        AmazingTimePickerModule
    ]
})
export class HomeModule {}
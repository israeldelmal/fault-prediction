import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutes } from './routes/routes';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
    {
        path: AppRoutes.root,
        component: LayoutComponent,
        loadChildren: './components/home/home.module#HomeModule'
    },
    {
        path: AppRoutes.simulation.path,
        component: LayoutComponent,
        loadChildren: './components/simulation/simulation.module#SimulationModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}

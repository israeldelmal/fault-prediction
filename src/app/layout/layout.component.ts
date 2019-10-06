import { Component } from "@angular/core";
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: [ './layout.component.scss' ]
})
export class LayoutComponent {
    urlNav: any;

    constructor(
        private router: Router
    ) {
        this.router.events.pipe(
            filter(ev => ev instanceof NavigationEnd)
        ).subscribe((ev: any) => {
            this.urlNav = ev.url;
        });
    }
}
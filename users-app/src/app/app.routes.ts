import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { OverviewComponent } from './product/overview/overview.component';

export const APP_ROUTES : Routes = [{
    path : "",
    redirectTo : '/about',
    pathMatch : 'full'
},{
    path : "about",
    component : AboutComponent
}, {
    path : "contact",
    component : ContactComponent
}, {
    path : "product",
    component : OverviewComponent
}, {
    path : "**",
    redirectTo : "/",
    pathMatch : 'full'
}]
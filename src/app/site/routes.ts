import {Routes} from '@angular/router';
import {NmbDashboardPageComponent} from './dashboard/dashboard.page';
import {NmbPresentationComponent} from './dashboard/presentation/presentation.component';

export const APP_ROUTES_COMPONENTS = [
  NmbDashboardPageComponent,
  NmbPresentationComponent
];

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: NmbDashboardPageComponent
  }
];

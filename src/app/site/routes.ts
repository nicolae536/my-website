import { Routes } from '@angular/router';
import { NmbDashboardPageComponent } from './dashboard/dashboard.page';
import { NmbPresentationComponent } from './dashboard/presentation/presentation.component';
import { NbmProgrammingExperienceComponent } from './dashboard/programming-experience/programming-experience.component';
import { NmbSkillsComponent } from './dashboard/skills/skills.component';

export const APP_ROUTES_COMPONENTS = [
  NmbDashboardPageComponent,
  NmbPresentationComponent,
  NbmProgrammingExperienceComponent,
  NmbSkillsComponent
];

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: NmbDashboardPageComponent
  }
];

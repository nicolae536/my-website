import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {MatCardModule, MatToolbarModule, MatSidenavModule, MatButtonModule, MatIconModule, MatProgressBarModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {NmbAppShellComponent} from './components/app-shell/app-shell.component';
import {CardContentComponent} from './components/card-content/card-content.component';
import {CardComponent} from './components/card/card.component';
import {NmbNavigationComponent} from './components/navigation/navigation.component';
import {NmbApiService} from './core';
import {NmbLoadingWatcherService} from './core/api/loading-watcher';

const DECLARATIONS = [
  CardComponent,
  CardContentComponent,
  NmbAppShellComponent,
  NmbNavigationComponent
];

const PROVIDERS = [
  NmbApiService,
  NmbLoadingWatcherService
];

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    RouterModule
  ],
  declarations: [...DECLARATIONS],
  exports: [...DECLARATIONS],
  providers: [...PROVIDERS]
})
export class SharedModule {
}
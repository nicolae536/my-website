import {Component, OnInit, ChangeDetectionStrategy, OnDestroy, ViewChild, ViewEncapsulation, ElementRef} from '@angular/core';
import {MatDrawer} from '@angular/material';
import {Router, NavigationStart, NavigationEnd} from '@angular/router';
import {Observable} from 'rxjs/internal/Observable';
import {Subject} from 'rxjs/internal/Subject';
import {takeUntil, filter} from 'rxjs/operators';
import {NmbApiService, isDefinded} from '../../core';
import {NmbLoadingWatcherService} from '../../core/api/loading-watcher';
import {NmbNavigationUrl} from '../../core/api/menu-api';

@Component({
  selector: 'nmb-app-shell',
  templateUrl: 'app-shell.html',
  styleUrls: ['./app-shell.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NmbAppShellComponent implements OnInit, OnDestroy {
  menuItems$: Observable<NmbNavigationUrl[]>;

  private onDestroy: Subject<any> = new Subject();

  @ViewChild(MatDrawer) matDrawer: MatDrawer;
  @ViewChild('content') content: ElementRef;

  constructor(public appState: NmbLoadingWatcherService,
              private router: Router,
              private api: NmbApiService) {
    this.menuItems$ = this.api.getSharedSubscription(this.api.menu.getMenus(), this.onDestroy.asObservable());
  }

  ngOnInit() {
    this.router.events.pipe(
      takeUntil(this.onDestroy.asObservable()),
      filter(ev => ev instanceof NavigationStart && isDefinded(this.matDrawer))
    ).subscribe(() => {
      this.matDrawer.close();
    });

    this.router.events.pipe(
      takeUntil(this.onDestroy.asObservable()),
      filter(ev => ev instanceof NavigationEnd && isDefinded(this.content))
    ).subscribe(() => {
      this.content.nativeElement.scrollTop = 0;
    });
  }

  ngOnDestroy() {
    this.onDestroy.next();
    this.onDestroy.complete();
  }
}
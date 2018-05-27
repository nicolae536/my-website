import {Component, ChangeDetectionStrategy, OnDestroy} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject} from 'rxjs';
import {IBasicInfo, BaseController, NmbApiService, NmbLoadingWatcherService} from '../../shared/core';

@Component({
  selector: 'nmb-dashboard-page',
  templateUrl: 'dashboard.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NmbDashboardPageComponent implements OnDestroy {
  private _destroy: Subject<any> = new Subject();
  controller: BaseController<any, IBasicInfo>;


  constructor(private route: ActivatedRoute,
              private loadingWatcher: NmbLoadingWatcherService,
              private apiService: NmbApiService) {
    this.controller = new BaseController<any, IBasicInfo>({
      context: this.route.data,
      getState: () => this.apiService.basicInfo.getinfo(),
      destroy: this._destroy.asObservable()
    }, this.loadingWatcher);
  }

  ngOnDestroy(): void {
    this._destroy.next();
    this._destroy.complete();
  }
}

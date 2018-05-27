import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {first, takeUntil} from 'rxjs/operators';
import {BasicInfoApi} from './basic-info-api';
import {MenuApi} from './menu-api';

@Injectable()
export class NmbApiService {
  menu: MenuApi = new MenuApi(this);
  basicInfo: BasicInfoApi = new BasicInfoApi(this);

  constructor(public http: HttpClient) {
  }

  getSharedSubscription<T>(obs: Observable<T>, destroyNotifier: Observable<any>): Observable<T> {
    const bh = new BehaviorSubject<T>(null);

    obs.pipe(
      first()
    ).subscribe(v => bh.next(v));

    if (destroyNotifier) {
      return bh.pipe(takeUntil(destroyNotifier));
    }

    return bh.asObservable();
  }

  wrapUrl(url: string): string {
    return '/assets/json' + url;
  }
}

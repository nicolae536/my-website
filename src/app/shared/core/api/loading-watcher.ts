import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {BaseController} from '../base.controller';

@Injectable()
export class NmbLoadingWatcherService {
  get isLoading$() {
    return this._isLoading$.asObservable();
  }

  private _isLoading$: BehaviorSubject<boolean> = new BehaviorSubject(true);

  private _loaders: any = {};

  watchController(controller: BaseController<any, any>) {
    const key = new Date().toISOString();
    controller.fullState$.subscribe((v) => {
      this._loaders[key] = v.loading;
      this.updateObservable();
    }, () => {
      delete this._loaders[key];
      this.updateObservable();
    }, () => {
      delete this._loaders[key];
      this.updateObservable();
    });
  }

  updateObservable() {
    for (const key in this._loaders) {
      if (!this._isLoading$.value && this._loaders[key]) {
        this._isLoading$.next(true);
        return;
      }
    }

    this._isLoading$.next(false);
  }
}
import {Observable, Subject, merge, of, concat} from 'rxjs';
import {takeUntil, switchMap, map, publishReplay, refCount, tap, catchError} from 'rxjs/operators';
import {NmbLoadingWatcherService} from './api/loading-watcher';

interface IBaseState<TState> {
  ok: TState;
  layoutType: 'ok' | 'initial-loading' | 'loading' | 'full-page-error' | 'retryable-error';
  loading: boolean;
  error: any;
}

export class BaseController<TContext, TState> {
  get fullState$() {
    return this._stateObservable$;
  }

  get state$() {
    return this._stateObservable$.pipe(map(val => val.ok));
  }

  private data: IBaseState<TState>;
  private retrySubject: Subject<TContext> = new Subject();

  private _stateObservable$: Observable<IBaseState<TState>>;

  constructor(inputs: {
    context: Observable<TContext>,
    getState: (context: TContext) => Observable<TState>,
    destroy: Observable<void>
  }, private globalLoading?: NmbLoadingWatcherService) {
    this.data = this.makeState();

    let lastContext = null;

    this._stateObservable$ = merge<TContext, TContext>(
      inputs.context.pipe(
        tap(v => lastContext = v)
      ),
      this.retrySubject.pipe(
        map(v => v || lastContext)
      )
    ).pipe(
      takeUntil(inputs.destroy),
      switchMap((value: TContext) => {
        return concat(
          of(this.makeState({loading: true})),
          inputs.getState(value).pipe(
            catchError(e => of(this.makeState({error: e}))),
            map((ok: TState) => this.makeState({ok: ok}))
          )
        );
      }),
      publishReplay(1),
      refCount()
    );

    if (this.globalLoading) {
      this.globalLoading.watchController(this);
    }
  }

  private makeState(params?: { ok?: TState, error?: any, loading?: boolean }): IBaseState<TState> {
    if (!params) {
      return {
        layoutType: 'initial-loading',
        ok: null,
        loading: true,
        error: null
      };
    }

    const layoutType = this.getLayoutType(params.error);

    return {
      layoutType: params.ok ? 'ok' : layoutType,
      loading: !params.loading && !params.ok && layoutType === 'loading' ? true : params.loading || false,
      ok: params.ok || null,
      error: params.error || null
    };
  }

  private getLayoutType(e) {
    if (!e) {
      return 'loading';
    }


    return e && e.status === 401 ? 'full-page-error' : 'retryable-error';
  }
}
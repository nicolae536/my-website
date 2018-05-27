import {NmbApiService} from './api.service';

export class MenuApi {
  constructor(private api: NmbApiService) {
  }

  getMenus() {
    return this.api.http.get<NmbNavigationUrl[]>(
      this.api.wrapUrl('/app-menu.json')
    );
  }
}

export interface NmbNavigationUrl {
  path: string;
  title: string;
  icon?: string;
}

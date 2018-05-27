import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nmb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss', './shared/scss/main.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
}

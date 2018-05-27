import {Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation, Input} from '@angular/core';
import {NmbNavigationUrl} from '../../core/api/menu-api';

@Component({
  selector: 'nmb-navigation',
  templateUrl: 'navigation.html',
  styleUrls: ['./navigation.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NmbNavigationComponent implements OnInit {
  @Input() urls: NmbNavigationUrl [] = [{
    path: '',
    title: 'Home',
    icon: 'dashboard'
  }, {
    path: '/experience',
    title: 'Experience',
    icon: 'timeline'
  }, {
    path: '/contact',
    title: 'Contact',
    icon: 'phone'
  }];

  constructor() {
  }

  ngOnInit() {
  }
}
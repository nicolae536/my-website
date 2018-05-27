import {Component, Input, ChangeDetectionStrategy, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'nmb-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent {
  @Input() avatarClass: string;
  @Input() title: string;
  @Input() subtitle: string;
}

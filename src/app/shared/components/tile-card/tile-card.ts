import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'nmb-tile-card',
  templateUrl: './tile-card.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./tile-card.scss']
})
export class NmbTileCardComponent {
  @Input() icon: string;
  @Input() title: string;
  @Input() description: string;
  @Input() picture: string;
}

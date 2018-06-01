import { Component, ChangeDetectionStrategy, Input, ViewEncapsulation } from '@angular/core';
import { IBasicInfo } from '../../../shared/core';

@Component({
  selector: 'nmb-presentation',
  templateUrl: 'presentation.html',
  styleUrls: ['./presentation.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class NmbPresentationComponent {
  @Input() state: IBasicInfo;
}

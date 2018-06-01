import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { IBasicInfo } from '../../../shared/core';

@Component({
  selector: 'nmb-programming-experience',
  templateUrl: './programming-experience.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./programming-experience.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NbmProgrammingExperienceComponent {
  @Input() state: IBasicInfo;
}

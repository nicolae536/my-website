import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { IBasicInfo } from '../../../shared/core';

@Component({
  selector: 'nmb-skills',
  templateUrl: './skills.html',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./skills.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NmbSkillsComponent {
  @Input() state: IBasicInfo;

  constructor() {
  }
}

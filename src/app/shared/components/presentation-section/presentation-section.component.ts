import { Component, ViewEncapsulation, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
    selector: 'nmb-presentation-section',
    templateUrl: './presentation-section.html',
    styleUrls: ['./presentation-section.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class NmbPresentationSectionComponent {
    @Input() title: string;
    @Input() description: string;
}

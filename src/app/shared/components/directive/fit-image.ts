import { AfterViewInit, Directive, ElementRef, HostBinding } from '@angular/core';

@Directive({
    selector: '[nmbFitImage]',
})
export class NmbFitImage implements AfterViewInit {
    @HostBinding('class.fit-image-width-priority') isWidthPriority = false;
    @HostBinding('class.fit-image-height-priority') isHeightPriority = false;

    constructor(private elRef: ElementRef) {
        // if (this.elRef.nativeElement)
    }

    ngAfterViewInit(): void {
    }
}

import { Directive, ElementRef, inject, input } from "@angular/core";
import { LogDirective } from "./log.directive";

@Directive({
    // selector: 'app-safe-link' //! Tag Selector
    selector: 'a[appSafeLink]', //! Attribute Selector which should be used with anchor tag <a></a>
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    },
    hostDirectives: [LogDirective]
})
export class SafeLinkDirective {
    queryParam = input('myapp', {alias: 'appSafeLink'});
    private hostElementRef = inject<ElementRef<HTMLAnchorElement>>(ElementRef)

    constructor() {
        console.log("SafeLinkDirective is active!");
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm("Do you want to leave the app?");

        if (wantsToLeave) {
            // const address = (event.target as HTMLAnchorElement).href;
            const address = this.hostElementRef.nativeElement.href;
            // (event.target as HTMLAnchorElement).href = address + '?from=' + this.queryParam();
            this.hostElementRef.nativeElement.href = address + '?from=' + this.queryParam();
            return;
        }

        event.preventDefault();
    }
}
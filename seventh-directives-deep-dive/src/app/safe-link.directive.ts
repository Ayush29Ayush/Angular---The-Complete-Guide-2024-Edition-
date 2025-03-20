import { Directive } from "@angular/core";

@Directive({
    // selector: 'app-safe-link' //! Tag Selector
    selector: 'a[appSafeLink]', //! Attribute Selector which should be used with anchor tag <a></a>
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)'
    }
})
export class SafeLinkDirective {
    constructor() {
        console.log("SafeLinkDirective is active!");
    }

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm("Do you want to leave the app?");

        if (wantsToLeave) {
            return;
        }

        event.preventDefault();
    }
}
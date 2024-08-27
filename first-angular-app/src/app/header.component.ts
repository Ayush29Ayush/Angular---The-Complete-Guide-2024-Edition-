import { Component } from '@angular/core';

@Component({
    selector: 'app-header', //! selector is used to select this component as a HTML element tag in the HTML file
    standalone: true, //! standalone is used to tell Angular that this component is a standalone component and not a module component
    //! template: '<h1>Hello Angular</h1>',
    templateUrl: './header.component.html', //! templateUrl is used to specify the location of the template file
    styleUrls: ['./header.component.css'] //! styleUrls is used to specify the location of the CSS file
})

export class HeaderComponent {}
import { Component } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {
  // onSubmit(titleElement: HTMLInputElement) {
  //   console.log('Form submitted!');
  //   const enteredTitle = titleElement.value;
  //   console.log(enteredTitle);
  // }
  onSubmit(title: string, request: string) {
    console.log("The title is: " + title + ", and the request is: " + request);
  }
}

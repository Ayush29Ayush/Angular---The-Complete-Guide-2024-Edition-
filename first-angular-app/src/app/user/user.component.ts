import { Component, computed, EventEmitter, Input, input, Output, signal, output } from '@angular/core';
import { type User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //! Input decorator is used to receive json object from the parent component to this child component
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;

  //! Output decorator is used to send data from the child component to the parent component. In this case, it emits the id of the selected user. select is a custom named event
  @Output() select = new EventEmitter<string>();

  //! This is a getter function
  get imagePath() {
    return `assets/users/${this.user.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }
}

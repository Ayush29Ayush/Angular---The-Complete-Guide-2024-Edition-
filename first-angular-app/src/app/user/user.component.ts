import { Component, computed, EventEmitter, Input, input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  //! Input decorator is used to receive data from the parent component to this child component
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  //! Output decorator is used to send data from the child component to the parent component. In this case, it emits the id of the selected user. select is a custom named event
  @Output() select = new EventEmitter();

  //! This is a getter function
  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  onSelectUser() {
    this.select.emit(this.id);
  }
}

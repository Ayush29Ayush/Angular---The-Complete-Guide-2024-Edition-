import { Component, computed, Input, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  //! Input decorator is used to receive data from the parent component to this child component
  @Input() avatar!: string;
  @Input() name!: string;

  get imagePath() {
    return `assets/users/${this.avatar}`
  }

  onSelectUser() {
    
  }
}

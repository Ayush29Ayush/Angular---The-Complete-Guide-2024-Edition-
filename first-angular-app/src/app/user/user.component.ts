import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex]; // Advantage of doing this is that we can now access this selectedUser inside the template of this component.
  selectedUser = signal(DUMMY_USERS[randomIndex]); //! using signals for state management
  imagePath = computed(() => `assets/users/${this.selectedUser().avatar}`); //! using computed for state management which uses signals under the hood

  //! This is a getter
  // get imagePath() {
  //   return `assets/users/${this.selectedUser.avatar}`
  // }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser = DUMMY_USERS[randomIndex];
    this.selectedUser.set(DUMMY_USERS[randomIndex]); //! using signal's set method
  }
}

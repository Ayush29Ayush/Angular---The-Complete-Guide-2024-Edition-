import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

//! Variables outside the export class component needs data type to be defined like let vat const but inside the export class component, just type the variable name.
export class UserComponent {
  selectedUser = DUMMY_USERS[randomIndex]; // Advantage of doing this is that we can now access this selectedUser inside the template of this component.

  // private selectedUser = DUMMY_USERS[randomIndex]; //! Setting it private means this is accessible only inside this class and not in template
  // public selectedUser = DUMMY_USERS[randomIndex]; //! Setting it public means this is accessible in template

  //! This is a getter
  get imagePath() {
    // return 'assets/users/' + this.selectedUser.avatar
    return `assets/users/${this.selectedUser.avatar}`
  }
}

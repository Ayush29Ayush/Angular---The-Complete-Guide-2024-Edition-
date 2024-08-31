import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from "./tasks/tasks.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserId = 'u1';

  get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId)!;
  }

  //! When the user's click event is triggered, the onSelectUser method from user.component.ts is called. The emitted signal is then sent to the (select) event emitter. The (select) event then sends the emitted signal to the onSelectUser method of app.component.ts. The onSelectUser method from the app.component.ts then console.logs the selected user's id.
  onSelectUser(id: string) {
    console.log("Selected User with id: " + id);
    this.selectedUserId = id;
  }
}

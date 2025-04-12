import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  onSubmit(formData: NgForm) {
    console.log(formData.form);
    if (formData.form.invalid) {
      console.log("Form is invalid due to angular validators added in the template.")
      return;
    }
    console.log(formData.form.value);
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;
    console.log(`Email: ${enteredEmail}, Password: ${enteredPassword}`);
  }
}

import {afterNextRender,Component,DestroyRef,inject,viewChild} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  private form = viewChild.required<NgForm>('form');
  private destroyRef = inject(DestroyRef);

  constructor() {
    afterNextRender(() => {
      const savedForm = window.localStorage.getItem('saved-login-form');
      
      if (savedForm) {
        const loadedFormData = JSON.parse(savedForm);
        const savedEmail = loadedFormData.email;
        // this.form().setValue({
        //   email: savedEmail,
        //   password: ''
        // })
        setTimeout(()=>{this.form().controls['email'].setValue(savedEmail);}, 10);
      }

      const formRef = this.form();
      const subscription = formRef?.valueChanges?.pipe(debounceTime(500)).subscribe({
        // next: (value) => console.log(value)
        next: (value) =>
          window.localStorage.setItem(
            'saved-login-form',
            JSON.stringify({ email: value.email })
          ),
      });
      this.destroyRef.onDestroy(() => subscription?.unsubscribe());
    });
  }

  onSubmit(formData: NgForm) {
    console.log(formData.form);
    if (formData.form.invalid) {
      console.log('Form is invalid due to angular validators added in the template.');
      return;
    }
    console.log(formData.form.value);
    const enteredEmail = formData.form.value.email;
    const enteredPassword = formData.form.value.password;
    console.log(`Email: ${enteredEmail}, Password: ${enteredPassword}`);

    formData.form.reset();
  }
}

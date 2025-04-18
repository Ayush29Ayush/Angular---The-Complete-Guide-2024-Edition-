import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs';

function mustContainQuestionMark(control: AbstractControl) {
  if (control.value.includes('?')) {
    return null;
  }
  return { doesNotContainQuestionMark: true };
}

let initialEmailValue = ''
const savedForm = window.localStorage.getItem('saved-login-form');

if (savedForm) {
  const loadedForm = JSON.parse(savedForm);
  initialEmailValue = loadedForm.email;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  private destroyRef = inject(DestroyRef);
  form = new FormGroup({
    // email: new FormControl('', {
    email: new FormControl(initialEmailValue, {
      validators: [Validators.email, Validators.required]
    }),
    password: new FormControl('', {
      validators: [Validators.required, Validators.minLength(6), mustContainQuestionMark]
    }),
  })

  get emailIsInvalid() {
    return this.form.controls['email'].invalid && this.form.controls['email'].touched && this.form.controls['email'].dirty;
  }

  get passwordIsInvalid() {
    return this.form.controls['password'].invalid && this.form.controls['password'].touched && this.form.controls['password'].dirty;
  }

  ngOnInit(): void {
    const savedLoginForm = window.localStorage.getItem('saved-login-form');

    if (savedLoginForm) {
      const loadedFormData = JSON.parse(savedLoginForm);
      // this.form.controls['email'].setValue(loadedFormData.email);
      this.form.patchValue({email: loadedFormData.email});
    }

    const subscription = this.form.valueChanges.pipe(debounceTime(500)).subscribe({
      next: value => {
        window.localStorage.setItem('saved-login-form', JSON.stringify({ email: value.email })); 
      }
    })

    this.destroyRef.onDestroy(() => {subscription.unsubscribe();})
  }

  onSubmit() {
    // console.log(this.form);
    // console.log(this.form.value);
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
    console.log(`Email: ${enteredEmail}, Password: ${enteredPassword}`);
  }
}

import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import type { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  // @Output() calculate = new EventEmitter<InvestmentInput>(); //! Approach 1: Generic and usable with any version of Angular
  calculate = output<InvestmentInput>();
  enteredInitialInvestment = signal('0'); enteredAnnualInvestment = signal('0'); enteredExpectedReturn = signal('5'); enteredDuration = signal('5');

  onSubmit() {
    //! Emitting an event is constant for any approach
    this.calculate.emit({
      //! + converts string to number
      initialInvestment: +this.enteredInitialInvestment(), duration: +this.enteredDuration(), expectedReturn: +this.enteredExpectedReturn(), annualInvestment: +this.enteredAnnualInvestment()
    });
    // Reset the form
    this.enteredInitialInvestment.set('0'); this.enteredAnnualInvestment.set('0'); this.enteredExpectedReturn.set('5'); this.enteredDuration.set('5');
  }
}

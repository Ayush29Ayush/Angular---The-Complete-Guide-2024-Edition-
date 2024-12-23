import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() calculate = new EventEmitter<InvestmentInput>(); //! Approach 1: Generic and usable with any version of Angular

  enteredInitialInvestment = '0'; enteredAnnualInvestment = '0'; enteredExpectedReturn = '5'; enteredDuration = '10';

  onSubmit() {
    //! Emitting an event is constant for any approach
    this.calculate.emit({
      //! + converts string to number
      initialInvestment: +this.enteredInitialInvestment, duration: +this.enteredDuration, expectedReturn: +this.enteredExpectedReturn, annualInvestment: +this.enteredAnnualInvestment
    })
  }
}

import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Input, input } from '@angular/core';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent {
  //! Appraoch 1: Generic and usable with any version of Angular
  // @Input() results?: {
  //   year: number,
  //   interest: number,
  //   valueEndOfYear: number,
  //   annualInvestment: number,
  //   totalInterest: number,
  //   totalAmountInvested: number,
  // }[]
  //! Approach 2: Uses a signal i.e input signal decorator
  // results  = input<{year: number, interest: number, valueEndOfYear: number, annualInvestment: number, totalInterest: number, totalAmountInvested: number}[]>() 
  //! Approach 3: Use a service either by using constructor or by using dependency injection
  private investmentService = inject(InvestmentService);

  //! Approach 1: Generic
  // get results() {
  //   return this.investmentService.resultData;
  // }
  //! Appraoch 2: Using signals with computed so that it is read-only
  results = computed(() => this.investmentService.resultData());
  //! Approach 3: Directly using signals
  // results = this.investmentService.resultData.asReadonly();
}

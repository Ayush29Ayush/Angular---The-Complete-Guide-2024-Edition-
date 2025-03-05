import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-item.component.html',
  styleUrl: './dashboard-item.component.css'
})
export class DashboardItemComponent {
  //! Old approach - Before Angular 17
  // @Input({ required: true }) image!: { src: string, alt: string } = { src: '', alt: '' };
  // @Input({ required: true }) title!: string;
  //! New approach - After Angular 17
  image = input.required<{src: string; alt: string}>()
  title = input.required<string>()
}

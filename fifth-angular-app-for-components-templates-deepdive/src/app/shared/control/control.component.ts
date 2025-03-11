import {
  Component,
  HostBinding,
  HostListener,
  input,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  //! Approach - 1 (Recommended)
  host: {
    class: 'control',
    '(click)': 'onClick()',
  },
})
export class ControlComponent {
  //! Approach - 2 (Not recommended)
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Control clicked!');
  // }
  label = input.required<string>();

  onClick() {
    console.log('Control clicked!');
  }
}

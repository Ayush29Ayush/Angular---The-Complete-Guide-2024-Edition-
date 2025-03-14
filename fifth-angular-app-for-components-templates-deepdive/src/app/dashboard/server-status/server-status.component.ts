import { Component, DestroyRef, inject, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css',
})
export class ServerStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline'; //! Setting specific string values as types uses a typescript feature called "literal Types". The idea is to only allow specific (string) values - instead of all strings.
  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    const interval =setInterval(() => {
      const rnd = Math.random();
      console.log('Random Number Value =>', rnd);

      if (rnd < 0.5) {
        this.currentStatus = 'online';
      } else if (rnd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    //! Destroying the interval by either using component lifecycle hooks(ngOnDestroy) or by using the destroyRef helps us to avoid memory leaks
    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');
  // }
}

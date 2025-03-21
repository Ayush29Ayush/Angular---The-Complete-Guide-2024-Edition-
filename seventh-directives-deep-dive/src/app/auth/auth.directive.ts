import { Directive, effect, inject, input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true,
})
export class AuthDirective {
  userType = input.required<Permission>({ alias: 'appAuth' });
  private authService = inject(AuthService);
  private templateRef = inject(TemplateRef);
  private viewContainerRef = inject(ViewContainerRef);

  constructor() {
    effect(() => {
      if (this.userType() === this.authService.activePermission()) {
        // console.log('User is authorized to view this content');\
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      } else {
        // console.log('User is not authorized to view this content');
        this.viewContainerRef.clear();
      }
    });
  }
}

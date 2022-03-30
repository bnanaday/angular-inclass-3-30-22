import { Component } from '@angular/core';

@Component({
  selector: 'app-greeting',
  template: `
  <h1>This is a heading in Greeting Component</h1>
  <ng-content select='.special'></ng-content>
  <ng-content select='div'></ng-content>`,
})
export class GreetingComponent {}

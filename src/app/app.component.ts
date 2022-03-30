import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>This is a heading in AppComponent</h1>
  <app-greeting>
    {{greeting}}
    <p>Hello World</p>
    <p class='special'>Hello Mundo!</p>
      <div>Ipum Lorem</div>
  </app-greeting>`,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  greeting: string = 'Hello Angular!';
}

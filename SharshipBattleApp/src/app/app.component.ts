import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <ngx-main-layout>
      <router-outlet></router-outlet>
    </ngx-main-layout>
  `,
})
export class AppComponent {
  title = 'SharshipBattleApp';
}

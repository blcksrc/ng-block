import { Component } from '@angular/core';

@Component({
  selector: 'blck-root',
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">
        Home
      </a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [
    `.active { font-weight: bolder; }`
  ]
})
export class AppComponent {
  title = 'App';
}

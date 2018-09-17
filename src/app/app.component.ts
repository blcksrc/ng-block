import { Component } from '@angular/core';

@Component({
  selector: 'blck-root',
  template: `
    <h1>{{ title }}</h1>
    <nav>
      <a routerLink="/home" routerLinkActive="active">
        Home
      </a>
      <a routerLink="/search" routerLinkActive="active">
        Search
      </a>
      <a routerLink="/login" routerLinkActive="active">
        Login
      </a>
      <a routerLink="/signup" routerLinkActive="active">
        Signup
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

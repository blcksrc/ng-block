import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blck-login',
  template: `
    <h2>Login</h2>

    <p>Log into your account</p>

    <form action="/login" method="post">

      <p>
        <label>Email</label>
        <br>
        <input type="email" name="email" required>
      </p>

      <p>
        <label>Password</label>
        <br>
        <input type="password" name="password" required>
      </p>

      <p>
        <label>
          <input type="checkbox"> Remember me
        </label>
      </p>

      <button>Login</button>
    </form>

    <p>
      Don't have an account? <a routerLink="/signup">Sign up</a>
    </p>

    <p>
      <a routerLink="/forgot-password">Forgot password?</a>
    </p>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blck-forgot-password',
  template: `
    <h2>Reset Password</h2>

    <p>Enter your email address for a link to reset your password.</p>

    <form action="/login" method="post">
      <p>
        <label>Email</label>
        <br>
        <input type="email" name="email" required>
      </p>

      <button>Reset password</button>
    </form>

    <p>
      <a routerLink="/login">Go back to Sign In</a>
    </p>
  `,
  styles: []
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

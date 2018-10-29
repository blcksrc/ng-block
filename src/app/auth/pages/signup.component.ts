import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'blck-signup',
  template: `
    <h2>Sign up</h2>

    <p>Complete your registration, to start using our app!</p>

    <form action="/signup" method="post">

      <p>
        <label>Name</label>
        <br>
        <input type="text" name="name" required>
      </p>

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
        <label>Confirm Password</label>
        <br>
        <input type="password_confirmation" name="password" required>
      </p>

      <button>Create Account</button>
    </form>

    <p>
      Already have an account? <a routerLink="/login">Login</a>
    </p>
  `,
  styles: []
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

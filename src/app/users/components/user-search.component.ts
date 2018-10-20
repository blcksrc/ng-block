import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
selector: 'blck-user-search',
  template: `
    <div id="search-component">
      <h4>Hero Search</h4>

      <input #searchBox id="search-box" (keyup)="search(searchBox.value)" />

      <ul class="search-result">
        <li *ngFor="let user of users$ | async" >
          <a routerLink="/detail/{{ user.id }}">
            {{ user.name }}
          </a>
        </li>
      </ul>
    </div>
  `,
  styles: []
})
export class UserSearchComponent implements OnInit {

  users$: Observable<User[]>;
  private searchTerms = new Subject<string>();
 
  constructor(private userService: UserService) {}
 
  ngOnInit(): void {
    this.users$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),
 
      // ignore new term if same as previous term
      distinctUntilChanged(),
 
      // switch to new search observable each time the term changes
      switchMap((term: string) => this.userService.searchUsers(term)),
    );
  }

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }
}

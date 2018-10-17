import { Component, OnInit } from '@angular/core';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'blck-messages',
  template: `
    <div *ngIf="messageService.messages.length">

      <h2>Messages</h2>
      <button (click)="messageService.clear()">clear</button>
      <div *ngFor='let message of messageService.messages'>
        {{message}}
      </div>

    </div>
  `,
  styles: []
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit() {
  }

}
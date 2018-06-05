import { Component, OnInit, Input, ViewChild, ElementRef, ViewChildren } from '@angular/core';
import { Message } from '../models/message';
import { MessageItemComponent } from '../message-item/message-item.component';
import { QueryList } from '@angular/core/src/render3';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit {

  @Input('messages')
  private messages: Message[];

  constructor() { }

  ngOnInit() {
  }

}

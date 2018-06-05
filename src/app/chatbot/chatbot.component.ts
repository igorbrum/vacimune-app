import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  @Input('message')
  public message: Message;
  @Input('messages')
  public messages: Message[];

  constructor() { 
    this.message = new Message('');
    this.messages = [
      new Message('Bem vindo!', new Date())
    ];
   }

  ngOnInit() {
  }

}

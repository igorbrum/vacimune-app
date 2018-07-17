import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../models/message';
import { WatsonService } from '../../services/watson.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
  styleUrls: ['./message-form.component.css']
})
export class MessageFormComponent implements OnInit {

  @Input('message')
  public message : Message;

  @Input('messages')
  public messages : Message[];

  constructor(private watsonService: WatsonService) { }

  ngOnInit() {
  }

  public sendMessage(): void {
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.watsonService.getResponse(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, res.timestamp)
      );
    });

    this.message = new Message('');
  }

}

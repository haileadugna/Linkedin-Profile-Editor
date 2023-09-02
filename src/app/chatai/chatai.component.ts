import { Component } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chatai',
  templateUrl: './chatai.component.html',
  styleUrls: ['./chatai.component.css']
})
export class ChataiComponent {

  constructor(private chatService: ChatService) { }
  chat: string = '';
  inputChat: string = '';
  personChat: string = '';

  sharedChat() {
    if (this.inputChat.trim() !== '') {

      this.chatService.getChat(this.inputChat).subscribe(chat => {
        this.chat += this.inputChat + '<br>' ;
        
      });
    }
    this.personChat += this.inputChat + '<br>';
    this.inputChat = "";
  }

}


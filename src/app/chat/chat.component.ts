import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  messages: any[] = [];
  newMessage: string = '';
  currentUserId: number = 1; // Assurez-vous de définir cette valeur
  recipientId: number = 1; // Assurez-vous de définir cette valeur

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages(): void {
    this.http.get<any[]>(`http://localhost:3000/chat/messages/${this.currentUserId}`)
      .subscribe((messages: any[]) => {
        this.messages = messages;
      }, error => {
        console.error('Error fetching messages:', error);
      });
  }

  sendMessage(): void {
    const message = {
      content: this.newMessage,
      senderId: this.currentUserId,
      recipientId: this.recipientId
    };
    this.http.post('http://localhost:3000/chat/send', message)
      .subscribe(response => {
        console.log('Message sent successfully', response);
        this.newMessage = '';
        this.getMessages();
      }, error => {
        console.error('Error sending message:', error);
      });
  }
}

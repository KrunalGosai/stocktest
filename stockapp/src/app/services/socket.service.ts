import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {io} from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  socket;
  constructor() {   }

  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT, {
      auth: {
        token: "abc"
      }
    });

    this.socket.emit('my message', 'Hello there from Angular.');

    this.socket.on('broadcast', (data: string) => {
      console.log(data);
    });

    this.socket.on('connection',(data) => {
      console.log(data);
    })

    this.socket.on('batch',(data) => {
      this.socket.emit("broadcast",'send')
      console.log(data);
    })
  }
}

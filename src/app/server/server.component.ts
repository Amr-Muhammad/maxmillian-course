import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  serverId: number = 10
  serverStattus: string = 'offline'
  flag: number = 6
  isActive:boolean = true
  constructor() {
    this.serverStattus = Math.random() > 0.5 ? 'online' : 'offline'
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-first-project';
  fullSentence: string = 'No server Was Created'
  sentence: string = ''
  flag:boolean = false

  changeSentence() {
    this.flag=true
    this.fullSentence = `Server was created! Name is ${this.sentence}`
  }
}

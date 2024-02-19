import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Application Tittle';
  constructor(){
    setTimeout(() => {
      this.title = "Title Has been changes"
    }, 2000);
  }
}

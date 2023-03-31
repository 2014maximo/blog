import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'libreta';

  constructor(){
    let aleatorio =Math.round( Math.random() * (9999999999 - 1000000000) + 1000000000);
    console.log(aleatorio,'versión 1.0.0.3')
  }
}

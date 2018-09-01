import { Component } from '@angular/core';
import { LP } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lpList: LP[] = [];

  addToList($event: LP) {
    this.lpList.unshift($event);
  }
}

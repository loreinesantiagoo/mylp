import { Component } from '@angular/core';
import { LP } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  lpList: LP[] = [
    { 
      albumName: 'The Very Best of Acoustic Alchemy', artistName: 'Acoustic Alchemy',
      ratings: 9, albumCover: 'assets/acoustic_alchemy.jpg'
    },

    {
      albumName: 'Brothers in Arms', artistName: 'Dire Straits',
      ratings: 9, albumCover: 'assets/dire_straits.jpg'
    },

    {
      albumName: 'Rumours', artistName: 'Fleetwood Mac',
      ratings: 9, albumCover: 'assets/fleetwood_mac.jpeg'
    },

    {
      albumName: 'El Diablo  Suelto', artistName: 'John Williams',
      ratings: 9, albumCover: 'assets/john_williams.jpg'
    },

    {
      albumName: 'Thriller', artistName: 'Michael Jackson',
      ratings: 9, albumCover: 'assets/thriller.jpg'
    },

  ];

  addToList($event: LP) {
    this.lpList.unshift($event);
  }
}

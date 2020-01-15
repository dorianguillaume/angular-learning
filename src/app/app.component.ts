import { Component } from '@angular/core';
import { Album } from './model/Album';
import { Song } from './model/Song';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';

  albums: Album[] = new Array();

  album1: Album = new Album('Order in Decline', 'Sum 41', 8, [new Song('Out for Blood', 250), new Song('Turning Away', 115)], 'assets/order_in_decline.jpg');
  album2 = new Album('La Fête est finie', 'Orelsan', 7, [new Song('Basique', 130), new Song('Paradis', 237)], 'assets/la_fete_est_finie.jpg')

  ngOnInit(){
    this.albums.push(this.album1)
    this.albums.push(this.album2)

  }
}

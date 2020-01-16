import { Injectable } from '@angular/core';
import { Album } from '../model/Album';
import { Song } from '../model/Song';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  public ALBUMS = [
    new Album('order in decline', 'Sum 41', 8, [new Song('Out for Blood', 250), new Song('Turning Away', 115)], 'assets/order_in_decline.jpg'),
    new Album('la fête est finie', 'Orelsan', 7, [new Song('Basique', 130), new Song('Paradis', 237)], 'assets/la_fete_est_finie.jpg')
  ]

  constructor() { }

  getAlbums(){
    return this.ALBUMS;
  }

  findAlbum(name){
    
    return this.ALBUMS.find(element => {
      return element.name === name
      
    });
  }
}

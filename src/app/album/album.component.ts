import { Component, OnInit } from '@angular/core';
import { Album } from '../model/Album';
import { Song } from '../model/Song';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album1: Album = new Album('Fire', 'Sum 41', 8, []);
  album2 = new Album('La Fête est finie', 'Orelsan', 7, [])

  constructor() { }

  ngOnInit() {
    
  }

}

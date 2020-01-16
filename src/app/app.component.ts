import { Component } from '@angular/core';
import { Album } from './model/Album';
import { Song } from './model/Song';
import { AlbumService } from './shared/album.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-app';
  
  public albums: Album[]

  /**
   *FAIT REFERENCE AU SERVICE ALBUM CREE PRECEDEMENT
   */
  constructor(private albumService: AlbumService) { }

  ngOnInit(){
    this.albums = this.albumService.getAlbums();
  }  
}

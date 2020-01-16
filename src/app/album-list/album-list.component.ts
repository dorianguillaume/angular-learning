import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../shared/album.service';
import { Album } from '../model/Album';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit {

  public albums: Album[];
  
  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.albums = this.albumService.getAlbums();
  }

}

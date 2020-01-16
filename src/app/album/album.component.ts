import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../model/Album';
import { Song } from '../model/Song';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../shared/album.service';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  album;


  gradeEmpty: Map<Album, boolean> = new Map<Album, boolean>(); 
  bgColor: Map<Album, string> = new Map<Album, string>();
  btnColor: Map<Album, string> = new Map<Album, string>();

  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    
    this.activatedRoute.paramMap.subscribe(
      (params) => {
        console.log(params.get('id'))
        this.album = this.albumService.findAlbum(params.get('id'))
        console.log(this.album)
      }
    )
  }

  isValid(album){
    console.log(album.grade)
    if(album.grade >= 0 && album.grade !== null){
      this.gradeEmpty.set(album, false)
    }else this.gradeEmpty.set(album, true)
  }

  displayGrade(album){
    console.log("Votre nouvelle note est de : "+album.grade)
  }

  colorAlbum(album){
    
    if(album.grade >= 5){
      this.bgColor.set(album, 'bg-success');
      this.btnColor.set(album, 'btn-light')
    }else if (album.grade == 0) {
      this.bgColor.set(album, 'bg-danger');
      this.btnColor.set(album, 'btn-light')
    }else {
      this.bgColor.set(album, 'bg-light');
      this.btnColor.set(album, 'btn-primary')
    }
    console.log(this.btnColor.get(album))
  }
}

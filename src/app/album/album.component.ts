import { Component, OnInit, Input } from '@angular/core';
import { Album } from '../model/Album';
import { Song } from '../model/Song';


@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  @Input() album;

  albums: Album[] = new Array()

  gradeEmpty: Map<Album, boolean> = new Map<Album, boolean>(); 
  bgColor: Map<Album, string> = new Map<Album, string>();
  btnColor: Map<Album, string> = new Map<Album, string>();

  constructor() { }

  ngOnInit() {
    this.albums.push(this.album);

    this.albums.forEach(element => {
      this.isValid(element)
      this.btnColor.set(element, 'btn-primary')
    });
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

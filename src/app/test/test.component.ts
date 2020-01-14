import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   public input
   public p

  constructor() { }

  ngOnInit() {
  }

  addText(){
    this.p += this.input
  }

  getText(e){
    this.input = e.target.value
  }
}

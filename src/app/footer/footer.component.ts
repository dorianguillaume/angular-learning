import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  version = 1.14
  email = 'drnguillaume@gmail.com'

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = 'Mes Albums !!'
  date = new Date().toLocaleDateString()
  user = new User('Guillaume', 'Dorian')

  constructor() { }

  ngOnInit() {
  }

}

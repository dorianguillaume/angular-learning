import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = 'Mes Albums !!'
  date = new Date().toLocaleDateString()
  user: User

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.user = this.userService.getUser()
  }

}

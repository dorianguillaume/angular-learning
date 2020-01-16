import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = new User('Guillaume', 'Dorian')

  constructor() { }

  getUser(){
    return this.user
  }
}

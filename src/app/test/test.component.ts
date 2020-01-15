import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

   public input
   public p = ''
   public state
   public mail
   public mailConfirm
   public checkMail
   public isValid = true

  constructor() { }

  ngOnInit() {
  }

  addText(){
    this.p += this.input
  }

  getText(e){
    this.input = e.target.value
  }

  checkAll(){
    this.state = true
  }

  uncheckAll(){
    this.state = false
  }

  getMail(e){
    this.mail= e.target.value
  }

  compare(e){

    this.mailConfirm = e.target.value

    console.log(this.mail)
    console.log(this.mailConfirm)

    //!this.mail verifie directement si c'est vide, null ou undefined !
    if(this.mail != this.mailConfirm || !this.mail){
      this.checkMail = 'bg-danger'
      this.isValid = false
      
    } else {
      this.checkMail ='bg-success'
      this.isValid = true
    }
  }
}

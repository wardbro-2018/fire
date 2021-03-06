import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth) {
  }
  login() {
    this.afAuth.auth.createUserWithEmailAndPassword("","");
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  ngOnInit() {
  }

}

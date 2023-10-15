import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credientials = {
    email: '',
    password: ''
  }

  constructor(private auth: AngularFireAuth){}

  inSubmission = false

  showAlert = false
  alertMsg = 'Please wait! We are logging you in.'
  alertColor = 'blue'

  async login(){
    this.showAlert = true
    this.alertMsg = 'Please wait! We are logging you in.'
    this.alertColor = 'blue'
    this.inSubmission = true
    try {
      await this.auth.signInWithEmailAndPassword(
        this.credientials.email, this.credientials.password
      )
    } catch(e) {
      console.error(e)

      this.alertMsg = 'An unexpected error has occurred. Please try again later.'
      this.alertColor = 'red'
      this.inSubmission = false
      return
    }
    this.alertMsg = 'Success! You are now logged in.'
    this.alertColor = 'green'
  }
}

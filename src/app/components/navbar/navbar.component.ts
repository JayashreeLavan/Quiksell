import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: Observable<firebase.User>;

  constructor(
    public afAuth: AngularFireAuth,
     public flashMessage:FlashMessagesService) {
  this.user = afAuth.authState;
  }



    // login(){
    //   this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    // }

    logout(){
      this.afAuth.auth.signOut();
       firebase.auth().signOut();
      this.flashMessage.show("Hey! You logged out! Cya soon! ",{cssClass : 'alert-success', timeout:3000});
    

    }

  ngOnInit() {}


// setKeyword(){
//   return this.keyword;
// }
}

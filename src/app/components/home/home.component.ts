import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth  } from 'angularfire2/auth';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth) { 
    this.user = afAuth.authState;
  }

    googlelogin(){
      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    }

// emaillogin(email,password){
  
//   firebase.auth().signInWithEmailAndPassword(email, password);
// }


  ngOnInit() {
  }

}

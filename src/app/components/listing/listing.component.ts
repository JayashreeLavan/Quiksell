import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router,ActivatedRoute, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})

export class ListingComponent implements OnInit {
id:any;
listing: any;
imageUrl:any;
user:any;
uid:any;


      constructor( 
        private firebaseService:FirebaseService,
        private router: Router,
        private route:ActivatedRoute
      ) { }

      ngOnInit() {
      this.id = this.route.snapshot.params['id'];
      this.firebaseService.getListingDetails(this.id).subscribe(listing=>{
      this.listing = listing;

      let storageRef = firebase.storage().ref();
      let spaceRef = storageRef.child(listing.path);
      storageRef.child(listing.path).getDownloadURL().then((url)=>{
              this.imageUrl = url;
        }).catch((error)=>{
              console.log(error);
        });
        });
      }

    //to allow only the logged-in user to edit or delete post
      checkUser(){
        let usr = firebase.auth().currentUser;
        this. uid = usr.uid;
          if(this.uid == this.listing.user){
          return true;
          }
          else{
            return false;
          }  

      }

    //to remove a listing fromt he page and the Db
      onDeleteClick(){
        this.firebaseService.deleteListing(this.id);
        this.router.navigate(['/listings']);
      }


}

import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { FilterminePipe } from '../../filters/filtermine.pipe';
import * as firebase from 'firebase';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrls: ['./listings.component.css'],
  
})
export class ListingsComponent implements OnInit {
listings:any;
uid:any;

  constructor(private firebaseService: FirebaseService, 
  
    ) { }

  ngOnInit() {
    this.firebaseService.getListings().subscribe(listings =>{
    this.listings = listings;
 
    let usr = firebase.auth().currentUser;
    this.uid = usr.uid;
 
  });
     
}
}


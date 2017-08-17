import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-listing.component.html',
  styleUrls: ['./add-listing.component.css']
})
export class AddListingComponent implements OnInit {
title:any;
category:string;
price:number;
condition:string;
location:string;
image:any;
description:any;
user:any;
uid:any;

    constructor(private firebaseService:FirebaseService,
    private router:Router) { }

    ngOnInit() {
    }

    onAddSubmit(){

       let usr = firebase.auth().currentUser;
       if (usr != null) {
 this. uid = usr.uid;
  // console.log(this.uid);
       }

       let listing = {
        title:this.title,
        category:this.category,
        price:this.price,
        condition:this.condition,
        location:this.location,
        image:this.image,
        description:this.description,
         user:this.uid
    }

    this.firebaseService.addListing(listing);
    this.router.navigate(['listings']);
}
}

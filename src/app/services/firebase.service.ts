import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase';

@Injectable()
export class FirebaseService {

  listings: FirebaseListObservable<any[]>;
  listing: FirebaseObjectObservable<any>;
  folder:any;
  id:any;
  


        constructor(private db: AngularFireDatabase) {
          this.listing = this.db.object('/listings');
          this.listings = this.db.list('/listings') as FirebaseListObservable<Listing[]>;
          this.folder='listingimages';
        }

        //show all listings in the DB
          getListings(){
            return this.listings;
          }

          

           //Fetch the details of a post from the DB 
          getListingDetails(id){
            this.listing = this.db.object('/listings/'+id) as FirebaseObjectObservable<Listing>;
            return this.listing;
          }

          //get only My listings from the DB  
          getMyListings(userid){
            
             this.getListingDetails("");
            console.log(this.listings);
          }

        //to add a new post to the page and push it to the firebase DB
          addListing(listing){
            let storageRef = firebase.storage().ref(); 
            for(let chosenFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
            let path = `/${this.folder}/${chosenFile.name}`;
            let imagesRef = storageRef.child(path);
            imagesRef.put(chosenFile).then((snapshot)=>{
              listing.image = chosenFile.name;
              listing.path = path;
              return this.listings.push(listing);
            })
          }
          }
    
           //to update an existing post
          updateListing(id,listing){
            return this.listings.update(id,listing);

          }

          //to delete an existing post
          deleteListing(id){
            return this.listings.remove(id);
          }
    }



interface Listing{
  $key?:string;
  title:string;
  category:string;
  price:Number;
  condition:string;
  location:string;
  description?:string;
  image?:string;
  user:string;
}
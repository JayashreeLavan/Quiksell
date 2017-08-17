import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-listing',
  templateUrl: './edit-listing.component.html',
  styleUrls: ['./edit-listing.component.css']
})
export class EditListingComponent implements OnInit {
  id:any;
  title:any;
  category:string;
  price:number;
  condition:string;
  location:string;
  description:any;
 

  constructor(private firebaseService:FirebaseService,
    private router:Router,
    private route:ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.firebaseService.getListingDetails(this.id).subscribe(listing=>{
              
          this.title = listing.title;
          this.category = listing.category;
          this.price  = listing.price;
          this.condition = listing.condition;
          this.location = listing.location;
          this.description = listing.description;

    })
  }

    onEditSubmit(){
          
    let listing = {
      title:this.title,
      category:this.category,
      price:this.price,
      condition:this.condition,
      location:this.location,
      
      description:this.description
    }

    this.firebaseService.updateListing(this.id,listing);
    this.router.navigate(['/listings']);
}
}

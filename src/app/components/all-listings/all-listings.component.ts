import { Component, OnInit } from '@angular/core';
import { FilterPipe } from '../../filters/filter.pipe';
import { FiltercategoryPipe } from '../../filters/filtercategory.pipe';
import { FilterconditionPipe } from '../../filters/filtercondition.pipe';
import { FilterpricePipe } from '../../filters/filterprice.pipe';
import { FirebaseService } from '../../services/firebase.service';


@Component({
  selector: 'app-all-listings',
  templateUrl: './all-listings.component.html',
  styleUrls: ['./all-listings.component.css'],
})
export class AllListingsComponent implements OnInit {
listings:any;

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {

    this.firebaseService.getListings().subscribe(listings =>{
    this.listings = listings;

  });
  }
 

}
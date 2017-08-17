import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { FirebaseService } from './services/firebase.service';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';

import { AllListingsComponent } from './components/all-listings/all-listings.component';
import { FilterPipe } from './filters/filter.pipe';
import { FilterminePipe } from './filters/filtermine.pipe';
import { FilterpricePipe } from './filters/filterprice.pipe';
import { FiltercategoryPipe } from './filters/filtercategory.pipe';
import { FilterconditionPipe } from './filters/filtercondition.pipe';

const appRoutes: Routes = [
{path:'',component:HomeComponent},
{path:'listings',component:ListingsComponent},
{path:'listing/:id',component:ListingComponent},
{path:'add-listing',component:AddListingComponent},
{path:'edit-listing/:id',component:EditListingComponent},
{path:'all-listings',component:AllListingsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent,
    AllListingsComponent,
    FilterPipe,
    FilterminePipe,
    FilterpricePipe,
    FiltercategoryPipe,
    FilterconditionPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule, 
    AngularFireAuthModule,
    FlashMessagesModule,
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

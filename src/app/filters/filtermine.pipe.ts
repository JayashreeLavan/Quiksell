import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtermine'
})


export class FilterminePipe implements PipeTransform {


  transform(listings: any, uid:any): any {
    
      return listings.filter(function(listing){
      return listing.user == uid;
  });
}
}



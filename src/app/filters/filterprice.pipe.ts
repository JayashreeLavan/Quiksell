import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterprice'
})
export class FilterpricePipe implements PipeTransform {

  transform(listings: any,lowerLimit:any, upperLimit:any, free:any): any {

   if( (lowerLimit==undefined)&&(upperLimit==undefined)&&(free==undefined) )    {
      
         return listings;
    }
       else if (upperLimit && lowerLimit){
          return listings.filter(function(listing){
          return listing.price <= upperLimit;
        }).filter(function(listing){
                return listing.price >= lowerLimit;
        });
       }
      else if (upperLimit){
        return listings.filter(function(listing){
        return listing.price <= upperLimit;
      });
      }
       else if (lowerLimit){
        return listings.filter(function(listing){
        return listing.price >= lowerLimit;
      });
    }
    else if(free){
        return listings.filter(function(listing){
        return listing.price == 0;
        });
    }

}

}

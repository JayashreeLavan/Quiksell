import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercondition'
})
export class FilterconditionPipe implements PipeTransform {

  transform(listings: any,condition: any): any {
     if (condition==undefined)
  {
         return listings;
    }

       else if (condition){
        
        return listings.filter(function(listing){
        return listing.condition == condition;
      });
       }


  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})

export class FilterPipe implements PipeTransform {

  transform(listings: any, keyword: any): any {
    //check if search term if undefined

   if( keyword == undefined || keyword ==" " )    {
      
         return listings;
    }
 

      else if (keyword){
        
          return listings.filter(function(listing){
          return listing.title.toLowerCase().includes(keyword.toLowerCase());
        });
      } 

else {
        
         return listings;
    }
}
     

  }



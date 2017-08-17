import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtercategory'
})
export class FiltercategoryPipe implements PipeTransform {

  transform(listings: any,category: any): any {
     if (category == undefined)
  {
         return listings;
    }

   else if (category){
        if(category ==" "){
          return listings;
        }
        else{
        return listings.filter(function(listing){
        return listing.category == category;
        
      });
       }

  }

}
}

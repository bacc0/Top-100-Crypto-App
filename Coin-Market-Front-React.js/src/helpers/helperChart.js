
import { dateTimeConvert } from './helpers';


export function chartDataHelper(input) {
      
     let arrHead = [
           ['', 'Price USD']
     ];

     let priceAndTimeData = [];

     const everyNthNum = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
     
     let nthNumber = 6;

     if (input.length < 13) {  nthNumber = 1; };


     everyNthNum( input, nthNumber ).map( (el) => (
           
           priceAndTimeData.push([dateTimeConvert(el.time), el.price])
     ));
     
     return  arrHead.concat(priceAndTimeData);
};
import * as React  from 'react';
import {Component} from 'react';

import { numberType, 
         splitEveryThreeDigit } from '../../helpers/helpers';


         
export default class MarketCap extends Component {
     constructor(props){
          super(props);

          this.state = {
               market_cap : 0
          }
     }
     
static getDerivedStateFromProps( nextProps, prevState ) {
     if (nextProps.input !== prevState.input) {
           
           return { market_cap: nextProps.input };
     }
     else return null;
}
    
     render() {

          const { market_cap } = this.state;

          return (
               <td className='borderBottom centerText white_BG elHover_num' id='market_cap'>

                    { <span className='superSmall grey_text'>&#36;</span> }

                         <span className='greyBlue_text'>{ splitEveryThreeDigit(market_cap) } </span>

                    { <span className='superSmall grey_text'>{ numberType(market_cap) }</span> }

               </td> 
          );
     }
}

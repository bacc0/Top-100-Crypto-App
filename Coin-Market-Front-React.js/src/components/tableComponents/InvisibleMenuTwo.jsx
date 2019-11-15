import * as React    from 'react';
import { Component } from 'react';

import { splitEveryThreeDigit,  numberType } from '../../helpers/helpers';



export default class InvisibleMenuTwo extends Component {
     constructor(props){
          super(props);

          this.state = {
               volume_24h : 0,
               market_cap : 0
          }
     }
static getDerivedStateFromProps( nextProps, prevState ) {
     if (nextProps.inputVol !== prevState.inputVol) {
           
          return { 

               volume_24h: nextProps.inputVol ,
               market_cap : nextProps.inputCap
          };
     }
     else return null;
}
     
     render() {

          const { volume_24h, market_cap } = this.state;

          return (
               <td id='invisible_two'  className='borderBottom white_BG'>
                   
                    <span className='small'></span>

                    <span className='superSmall grey_text'>&#36;</span> 

                         { splitEveryThreeDigit(volume_24h) }

                    <span className='superSmall grey_text'>

                         { numberType(volume_24h) }</span>

                    <span className='small'></span>
                         <br/>
                    <span className='superSmall grey_text'>&#36;</span>
               
                         { splitEveryThreeDigit(market_cap) } 

                    <span className='superSmall grey_text'>

                         { numberType(market_cap) }
                   
                    </span>
               </td>
          );
     }
}

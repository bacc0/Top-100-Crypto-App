import React, { Component } from 'react';

import { splitEveryThreeDigit, 
         numberType } from '../../helpers/helpers';

 
         
export default class MarketCap extends Component {
     constructor(props){
          super(props);

          this.state = {
               volume_24h : 0,
          }
     }

static getDerivedStateFromProps( nextProps, prevState ) {
     if (nextProps.input !== prevState.input) {
           
           return { volume_24h: nextProps.input };
     }
     else return null;
}
        
     render() {

          const { volume_24h } = this.state;

          return (
               <td id='volume_24h' className='borderBottom centerText white_BG elHover_num'>

                    <span className='superSmall grey_text'>&#36;</span>

                         <span className='greyBlue_text'>{ splitEveryThreeDigit(volume_24h) }</span>

                    <span className='superSmall grey_text'>

                         { numberType(volume_24h) }

                    </span>
                    
               </td>
          );
     }
}

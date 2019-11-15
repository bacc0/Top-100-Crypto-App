import * as React   from 'react';
import  {Component} from 'react';

import { percentageColor, 
         toFixedTwo } from '../../helpers/helpers';

 
         
export default class PercentChange24h extends Component {
     constructor(props){
          super(props);

          this.state = {
               percent_change_24h : 0
          }
     }

static getDerivedStateFromProps( nextProps, prevState ) {
     if (nextProps.input !== prevState.input) {
           
           return { percent_change_24h: nextProps.input };
     }
     else return null;
}
    
     render() {

          const { percent_change_24h } = this.state;

          return (

               <td className='centerText bold_text borderBottom white_BG'  > 

                    <span className={ percentageColor(percent_change_24h) }>
                                    {      toFixedTwo(percent_change_24h) }</span>

                    <span className='superSmall grey_text'>%</span>

               </td>
          );
     }
}
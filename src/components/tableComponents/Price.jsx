import * as React   from 'react';
import  {Component} from 'react';
import { numbersAfterHundreds, toFixedTwo } from '../../helpers/helpers';

 

export default class Price extends Component {
     constructor(props){
          super(props);

          this.state = {
               price_time : [{}]
          }
     }

static getDerivedStateFromProps( nextProps, prevState ) {
     if (nextProps.input !== prevState.input) {
           
           return { price_time: nextProps.input };
     }
     else return null;
}

        
     render() {

          const { price_time } = this.state;

          return (
               <td className='centerText purple_text bold_text borderBottom white_BG'>

                    <span className='superSmall grey_text'>&#36;</span>

                         { toFixedTwo( price_time[price_time.length - 1].price ) }
                    
                    <span className='superSmallPrice'>

                         { numbersAfterHundreds( price_time[ price_time.length - 1].price )}

                    </span>

               </td>
          );
     }
}

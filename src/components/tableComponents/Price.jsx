import * as React   from 'react';
import  {Component} from 'react';
import { numbersAfterHundreds, toFixedTwo } from '../../helpers/helpers';


export default class Price extends Component {
     constructor(props){
          super(props);

          this.state = {
              price : [] 
          }
     }


static getDerivedStateFromProps( nextProps, prevState ) {
     if (nextProps.input !== prevState.input) {
           
           return {price: nextProps.input };
     }
     else return null;

}
     
     render() {

          const {price } = this.state;
console.log(price[0])
          return ( 
               <td className='centerText purple_text bold_text borderBottom white_BG elHover'>

                    <span className='superSmall grey_text'>&#36;</span>

                         { toFixedTwo(price[0].$numberDecimal) }
                    
                    <span className='superSmallPrice'>

                         { numbersAfterHundreds(price[0].$numberDecimal )}

                    </span>

               </td>
          );
     }
}

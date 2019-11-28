import * as React   from 'react';
import  {Component} from 'react';
import { splitEveryThreeDigit } from '../../helpers/helpers';

export default class Supply extends Component {
     constructor(props){
          super(props);

          this.state = {
               circulating_supply : 0,
               symbol: props.symbolCurrency || 'hide'
          }
     }

     static getDerivedStateFromProps( nextProps, prevState ) {
          if (nextProps.input !== prevState.input) {
               
               return { circulating_supply: nextProps.input };
          }
          else return null;
     }
     
     render() {

          const { circulating_supply, symbol } = this.state;

          return (
               <td id='supply' className='borderBottom white_BG elHover_num'>

                    <span className='greyBlue_text'>{ splitEveryThreeDigit(circulating_supply) }</span>

                         <span> </span>

                    <span className='superSmall grey_text white_BG'>{ symbol }</span> 

               </td>
          );
     }
}

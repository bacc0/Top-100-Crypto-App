import * as React   from 'react';


export const InvisibleMenu = ({symbol, name}) => 
(
     <td id='invisible' className='borderBottom white_BG'>

          <span> </span>

          <span className='greyBlue_text text_bold'>

               { symbol }

          </span>
          
          <br/>

          <span className='grey_text name'>{ name }</span>
     </td>
);


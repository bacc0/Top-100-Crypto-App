import * as React      from 'react';
import { logoPicture } from '../../helpers/helpers';



export const LogoPic = ({ logoPic }) => (

     <td id='logo' className='logo LeftBorder greyLightBG white_text picLogoHeight percentLogo' >

          <img id='innerLogo' src={ logoPicture(logoPic) } alt='coin' />
          
     </td>
);









import React from 'react';

export const TableHead = () =>  ( 
        
    <thead className='title_table gradVertical textShadowBlue'>
        <tr >

            <th id='logo_title' className='headTopBorder headLeftBorder'></th>

            <th id='name_title' className='centerText headTopBorder'>Name</th>

            <th id='symbol_title' className='centerText headTopBorder'>Symbol</th>

            <th id='invisible_title' className='headTopBorder'>
                Symbol<br/>
                Name
            </th>

            <th  className='headTopBorder centerText'>Price USD</th>

            <th  className='headTopBorder'>Change 24h</th>

            <th id='chart_title' className='headTopBorder centerText'>24h Chart</th>

            <th id='invisible_two_title' className='headTopBorder'>
                Volume 24h<br/>
                Market Cap
            </th>

            <th id='volume_24h_title' className='headTopBorder'>Volume 24h</th>

            <th id='market_cap_title' className='headTopBorder'>Market Cap</th>
            
            <th  className='headTopBorder headRightBorder'>Supply</th>
            
        </tr>
    </thead>  
);


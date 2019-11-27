import React from 'react';

export const TableHead = () =>  ( 
        
    <thead className='title_table gradVertical textShadowBlue'>
        <tr >
            <th id='logo_title' className='headTopBorder headLeftBorder percentLogo'></th>

            <th id='symbol_title ' className='centerText headTopBorder percent-9'>Symbol</th>

            <th id='name_title' className='centerText headTopBorder percent-13'>Name</th>

            <th id='invisible_title' className='headTopBorder '>
                Symbol <br/>
                Name   </th>

            <th  className='headTopBorder centerText percent-13'>Price USD</th>

            <th  className='headTopBorder centerText percent-9'>Change 24h</th>

            <th id='chart_title' className='headTopBorder centerText chartHead chart-size'>Seven Days</th>

            <th id='invisible_two_title' className='headTopBorder'>
                Volume 24h <br/>
                Market Cap </th>

            <th id='volume_24h_title' className='headTopBorder centerText percent-13'>Volume 24h</th>

            <th id='market_cap_title' className='headTopBorder centerText percent-13'>Market Cap</th>
            
            <th  id='supplyTitle' className='headTopBorder headRightBorder percent-13'>Supply</th>
        </tr>
    </thead>  
);


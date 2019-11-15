import React             from  'react';
import { Component }     from  'react';
import { Name }          from  './tableComponents/Name';
import { Symbol }        from  './tableComponents/Symbol';
import { LogoPic }       from  './tableComponents/LogoPic';
import { InvisibleMenu } from  './tableComponents/InvisibleMenu'
import Price             from  './tableComponents/Price';
import Chart             from  './tableComponents/Chart';
import Supply            from  './tableComponents/Supply';
import MarketCap         from  './tableComponents/MarketCap';
import Volume24h         from  './tableComponents/Volume24h';
import PercentChange24h  from  './tableComponents/PercentChange24h';
import InvisibleMenuTwo  from  './tableComponents/InvisibleMenuTwo';



export default class TableBody extends Component{
      
      constructor(props){
            super(props);
  
            this.state = {
                  currentCoins : props.input
            }
       }


       static getDerivedStateFromProps( nextProps, prevState ) {
            if (nextProps.input !== prevState.input) {
                  
                  return { currentCoins: nextProps.input };
            }
            else return null;
       }

      render(){

            const { currentCoins } = this.state;
      
            let chartBodyMap = currentCoins.map( coin => (
                  
                  <tr key = {coin._id}>

                        <LogoPic          logoPic  =  { coin.id } />

                        <InvisibleMenu    symbol   =  { coin.symbol } name = { coin.name } />

                        <Symbol           symbol   =  { coin.symbol } />

                        <Name             name     =  { coin.name } />

                        <Price            input    =  { coin.price_time } />

                        <PercentChange24h input    =  { coin.percent_change_24h } />
                        
                        <Chart            input    =  { coin.price_time } />

                        <Volume24h        input    =  { coin.volume_24h } />

                        <InvisibleMenuTwo inputVol =  { coin.volume_24h }  inputCap = { coin.market_cap } />

                        <MarketCap        input    =  { coin.market_cap } />

                        <Supply           input    =  { coin.circulating_supply } symbolCurrency = { coin.symbol } />

                  </tr>   
            ))
            return <tbody>{ chartBodyMap }</tbody>
      }    
}




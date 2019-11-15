import React          from 'react';
import { Component }  from 'react';
import { TableHead }  from './TableHead';
import TableBody      from './TableBody';



export default class Table extends Component{
      
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
		
		return (
			<table>

				<TableHead />

				<TableBody input={ currentCoins } />

			</table>
		)
	}    
}




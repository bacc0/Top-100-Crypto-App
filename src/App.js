import React              from 'react';
import { Component }      from 'react';
import Table              from './components/Table';


import InfiniteScroll from "react-infinite-scroll-component";


export default class App extends Component{
     
	state = {
		coins       :  [],
		count       :  16,
		starts      :  0,
		hasMore     :  true,
		counter     :  0
	}
	
	
	render() {
		
		const { count, coins, starts, hasMore } = this.state;

		return (

			<div className='wrap'>

				<InfiniteScroll
					next       =  { this.loadMore }
					hasMore    =  { hasMore }
					dataLength =  { coins.length }
					loader     =  { <div>
									<h4 className='loading'>Loading...</h4>
									<div className='pagesNum'>{starts + count}</div>
								</div> }
				>
					<div className='table'>
						< Table  input = { coins } />
					</div>

				</InfiniteScroll>
			</div>
		)
	}
	
	componentDidMount = () => {

		this.loadCoins();
		
		
		setInterval(async () => {

			 this.loadMore();
			 this.updateCoins();
			 
		}, 25000);
	}
	

	loadMore = () => {

		const { starts, count } = this.state;

		let hasMoreHelper = true;
		if ( starts >= 100 ) hasMoreHelper = false;

		this.setState( ({
			starts  : starts + count,
			hasMore : hasMoreHelper,
		}))

		this.loadCoins();
		
	}
	
	async  loadCoins() {

			const { coins, starts, count } = this.state;
			const url = `/info?starts=${starts}&count=${count}`;
		try {

			const response = await fetch(url, { cache: "no-store" }); 
			const dataJSON = await response.json();
			
			// console.log(response.status);

			this.setState({
				coins : coins.concat(dataJSON),
				
			});

			console.log(coins)
			console.log('coins')

		} catch (error) {
			console.log(error)
		}
	}

	async  updateCoins() {
console.log("change")
			const url = "/instruments";
		try {

			const response = await fetch(url, { cache: "no-store" });
			const dataJSON = await response.json();
			
			// console.log(response.status);

			this.setState({
				coins: dataJSON
			});
		} catch (error) {

			console.log(error)
		}
	}
}



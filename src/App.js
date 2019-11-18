import React              from 'react';
import { Component }      from 'react';
import Table              from './components/Table';
import Pagination         from './components/Pagination';
import { helperPaginate } from './helpers/helperPaginate'


export default class App extends Component{
     
	state = {
		coins        : [],
		loading      : true,
		currentPage  : 1,
		coinsPerPage : 12
	}

	render() {

		if (this.state.loading || !this.state.coins) {

			return <div className='loading'></div>
			
		} else {

			const  { currentCoins, pageNumbers } =  helperPaginate(
												this.state.coins,
												this.state.currentPage,
												this.state.coinsPerPage
											);
			const paginate = ( pageNumber ) => 
			
				this.setState({
					currentPage: pageNumber
			})

			return (

				<div className='wrap'>

					<div className=''> TOP <strong>99</strong> CRYPTO-CURRENCIES </div>

					<div className='table'>

						< Table  input = { currentCoins }/>

					</div>

					<span className='paginationWrap'>

						< Pagination  pageNumbers = { pageNumbers }  
								    paginate    = { paginate } 
								    currentPage = { this.state.currentPage }/>
					</span>
					
				</div>	
			)
          }    
	}

	
     componentDidMount() {
		
		this.update()

		setInterval(async () => {

			 this.update()
			 
		}, 60000);
	}



	async  update() {
		const url = "/instruments";

		try {

			const response = await fetch(url, { cache: "no-store" }); // fetch(url)
			console.log(response.status);
			const dataJSON = await response.json();

			this.setState({
				coins: dataJSON,
				loading: false
			});

			// this.setState(prevState => ({
			// 	coins: dataJSON,
			// 	loading: false
			// }));
			
		} catch (error) {

			console.log(error)
		}
	}
}



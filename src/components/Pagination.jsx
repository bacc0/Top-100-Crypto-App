import  * as React   from 'react';
import { Component } from 'react';



export default class Pagination extends Component {
          constructor( props ) {
               super( props );
     
               this.state = {
                    paginate    : props.paginate,
                    pageNumbers : props.pageNumbers,
                    activeClass : props.currentPage
               }
          }
static getDerivedStateFromProps( nextProps, prevState ) {
     if (nextProps.currentPage !== prevState.currentPage) {
               
               return { activeClass: nextProps.currentPage };
     }
     else return null;
}
          render() {
               
               const { paginate, pageNumbers, activeClass} = this.state;

               return (
                    <div className='pagination'>
                         { pageNumbers.map( pageNumber => (
                              <span key='number' >
                                   
                                   <a onClick = { () => paginate(pageNumber) } 
                                        href = '#' 
                                        className = {  activeClass        ===  pageNumber ? 'active'           : '' ||                   
                                                       pageNumbers[0]     ===  pageNumber ? 'firstPage'        : '' ||
                                                       activeClass - 2    ===  pageNumber ? 'lightTransparent' : '' ||
                                                       activeClass - 1    ===  pageNumber ? 'prevPage'         : '' ||
                                                       activeClass        ===  pageNumber ? 'active'           : '' ||
                                                       pageNumbers.length ===  pageNumber ? 'lastPage'         : '' ||
                                                       activeClass + 1    ===  pageNumber ? 'nextPage'         : '' || 
                                                       activeClass + 2    ===  pageNumber ? 'lightTransparent' : 'transparent'
                                                       } >
                                        { pageNumber }
                                   </a>
                              </span>  
                         ))}
                    </div>
               )
          }
     }
        

          
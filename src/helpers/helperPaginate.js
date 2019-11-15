export function helperPaginate(coins, currentPage, coinsPerPage) {
     
     let pageNumbers        =  [];
     const totalPages       =  Math.ceil(coins.length /coinsPerPage);
// Current Coin
     const indexOfLastCoin  =  currentPage * coinsPerPage;
     const indexOfFirstCoin =  indexOfLastCoin - coinsPerPage;
     const currentCoins     =  coins.slice(indexOfFirstCoin, indexOfLastCoin);

     for (let i = 1; i <= totalPages; i++) {

          pageNumbers.push(i)
     }

     return { currentCoins, pageNumbers }
};

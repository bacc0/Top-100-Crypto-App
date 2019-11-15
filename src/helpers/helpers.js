export function dateTimeConvert(input) {

      let convertTime = input.toString();

      let day = convertTime.slice(0, 10);
      let time = convertTime.slice(11, 19);

      let result = `${day} ( ${time} )`

      return result;
};

export function toFixedTwo(input) {

      let num = Math.floor(input * 100) / 100;
      return num.toFixed(2)
};

export function numbersAfterHundreds(input) {

      // check this
      if ( input === 0 ) {
            return 0;  
      }

      let arrFromInput = ('' + input).split('.');
      let splitted = ' ' + (arrFromInput[1].slice(2, arrFromInput[1].length));

      return splitted;
};

export function splitEveryThreeDigit(input) {

      let arrFromInput = ('' + input).split('.');
      let splitted = arrFromInput[0].split('');

      let divider = splitted.length % 3;

      let count    = 0;
      let countTwo = 0;
      let result   = '';

      if (divider === 0) {
            count = 0
      };
      if (divider === 1) {
            count = 2
      };
      if (divider === 2) {
            count = 1
      };

      for (let i = 0; i < splitted.length; i++) {
            count++;
            countTwo++;

            result += splitted[i];

            if (count === 3) {
                  if (countTwo === splitted.length) {
                        break;
                  } else {
                        result += ',';
                        count = 0;
                  }
            };
      }
      return result;
};

export function numberType(input) {

      let splitted = ('' + input).split('.');
      let result = '';

      if (splitted[0].length > 9) {
            result = ' Bn.';
      } else if (splitted[0].length > 6) {
            result = ' mil';
      }
      return result;
};

export function percentageColor(input) {

      if (+input >= 0) {
            return 'green-text';
      }
      return 'tomato-text';
};

export function logoPicture(input) {

      let pic =` https://s2.coinmarketcap.com/static/img/coins/128x128/${input}.png`;
      return pic
};

export async function componentDidMount () {
      try {
            setInterval(async () => {
       
                  await this.update()
                  
            }, 60000);
      } catch(e) {
            console.log(e);
      }
}





// export function chartDataHelper(input) {
      
//       let arrHead = [
//             ['', 'Price USD']
//       ];

//       let priceAndTimeData = [];

//       const everyNthNum = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1);
      
//       let nthNumber = 6;

//       if (input.length < 13) {
//             nthNumber = 1;
//       }

//       everyNthNum( input, nthNumber ).map( (el) => (
            
//             priceAndTimeData.push([dateTimeConvert(el.time), el.price])
//       ));
      
//       return  arrHead.concat(priceAndTimeData);
// };
import * as React          from 'react';
import { Component }       from 'react';
import { Chart }           from 'react-google-charts';
import { chartDataHelper } from '../../helpers/helperChart';



export default class LineChart extends Component {
      constructor(props) {
            super(props);

            this.state = {
                  chartData: [] 
            }
      }

      static getDerivedStateFromProps( nextProps, prevState ) {
            if (nextProps.input !== prevState.input) {

                  return { chartData: nextProps.input };
            }
            else return null;
      }

      render() {

            const { chartData } = this.state;

            return (
                  <td id ='chart' className='chart borderBottom white_BG'>  
                        <Chart
                              data      =  {chartDataHelper(chartData)}
                              width     =  {'120px'}
                              height    =  {'40px'}
                              loader    =  {<div className='ultraSmall'>Loading...</div>}
                              chartType =  'LineChart'
                              options   =  {{
                                    backgroundColor: 'none',
                                    colors: ['rgb(124, 67, 255)'],
                                    lineWidth: 1,
                                    axes: {
                                          x: {
                                                0: { side: 'top' }
                                          }
                                    },
                                    chartArea: {
                                          width: '150%',
                                          height: '175%'
                                    },
                                    hAxis: {
                                          textPosition: 'none',
                                          baselineColor: 'none',
                                          ticks: []
                                    },
                                    vAxis: {
                                          textPosition: 'none',
                                          baselineColor: 'none',
                                          ticks: [],
                                          scaleType: 'Linear'
                                    }
                              }
                        }/>
                  </td>
            );
      }
}

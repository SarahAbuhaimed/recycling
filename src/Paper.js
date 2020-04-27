import React, { Component } from 'react'
import {XYPlot, YAxis, HorizontalGridLines,LabelSeries,VerticalBarSeries} from 'react-vis';

export default class Paper extends Component {
    render() {
        const data = [
            {x: 1,  y: 200,label:'Riyadh'},
            {x: 3, y:300,label:'Makkah'},
            {x: 5, y:170,label:'Mdinah'},
            {x: 7, y:180,label:'Dammam'},
      ]
        return (
            <div>
            <div className="charts">
         <XYPlot width={300} height={300}>
         <HorizontalGridLines />
         <YAxis />
         <VerticalBarSeries data={data}  />
         <LabelSeries data={data}/>
         </XYPlot>
         </div> 
         </div>
        )
    }
}

import React, { Component } from 'react'
import {XYPlot, YAxis, HorizontalGridLines,LabelSeries,VerticalBarSeries} from 'react-vis';

export default class Cardboard extends Component {
    render() {
        const data = [
            {x: 1,  y: 190,label:'Riyadh'},
            {x: 3, y:200,label:'Makkah'},
            {x: 5, y:130,label:'Mdinah'},
            {x: 7, y:120,label:'Dammam'},
      ]
        return (
            <div>
               <div className="charts">
            <XYPlot width={300} height={300}>
            <HorizontalGridLines />
            <YAxis />
            <VerticalBarSeries data={data} color="white" />
            <LabelSeries data={data}/>
            </XYPlot>
            </div> 
            </div>
        )
    }
}

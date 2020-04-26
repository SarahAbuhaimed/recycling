import React, { Component } from 'react'
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, YAxis, HorizontalGridLines,LabelSeries,VerticalBarSeries} from 'react-vis';

export default class GlassChart extends Component {
    render() {
        const data = [
            {x: 1,  y: 100,label:'Riyadh'},
            {x: 3, y:110,label:'Makkah'},
            {x: 5, y:40,label:'Mdinah'},
            {x: 7, y:130,label:'Dammam'},
      ]
        return (
            <div className="charts">
            <XYPlot width={300} height={300}>
            <HorizontalGridLines />
            <YAxis />
            <VerticalBarSeries data={data} />
            <LabelSeries data={data}/>
            </XYPlot>
            </div>
        )
    }
}

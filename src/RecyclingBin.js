import React, { Component } from 'react'
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines,LabelSeries,VerticalBarSeries} from 'react-vis';

export default class RecyclingBin extends Component {
    render() {
        const data = [
           
            {x: 1,  y: 100,label:'Schools'},
            {x: 3, y:110,label:'Parks'},
            {x: 5, y:40,label:'malls'},
          
            {x: 7, y:130,label:'Offices'},
         
      
           
      ]
     

return (

<div className="charts">
<XYPlot width={300} height={300}>
<HorizontalGridLines />

<YAxis />
<VerticalBarSeries data={data} color="white"/>
<LabelSeries data={data}/>
</XYPlot>
</div>
)

}}
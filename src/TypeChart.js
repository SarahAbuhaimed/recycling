import React, { Component } from 'react'
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines, VerticalGridLines,LabelSeries,VerticalBarSeries} from 'react-vis';

export default class TypeChart extends Component {
    render() {
        const data = [
           
            {x: 1,  y: 800,label:'PET'},
            {x: 2, y:730,label:'HDPE'},
            {x: 3, y:443,label:'PVC'},
            {x: 4, y:990,label:'LDPE'},
            {x: 5, y:310,label:'PP'},
            {x: 6, y: 500,label:'PS'},
            {x:7,y:200,label:'other'}
      ]
     
return (

<div className="charts">
<XYPlot width={340} height={300}>
<HorizontalGridLines />


<YAxis/>
<VerticalBarSeries data={data} />
<LabelSeries 
data={data} />
</XYPlot>
</div>
)

}}

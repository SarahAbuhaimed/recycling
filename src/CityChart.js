import React , { Component } from 'react'
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, XAxis, YAxis, HorizontalGridLines,LabelSeries,VerticalBarSeries} from 'react-vis';
 
class CityChart extends Component {
    render(){
        const data = [
           
                {x: 1,  y: 200,label:'Riyadh'},
                {x: 2, y:180,label:'Madinah'},
                {x: 3, y:143,label:'Maakah'},
                {x: 4, y:90,label:'Dammam'},
                {x: 5, y:70,label:'Hail'},
                {x: 6, y: 50,label:'Jeddah'},
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

export default CityChart;
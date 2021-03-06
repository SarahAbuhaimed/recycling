import React, { Component } from 'react'
import Recycling from './RecyclingBin'
import CityChart from './CityChart'
import TypeChart from './TypeChart'
import Glass from './GlassChart'
import Cardboard from './Cardboard'
import Paper from './Paper'
export default class Chart extends Component {
    render() {
        return (
            <div className="container-fluid">
<br/>
<div className="row">
  <div className="col-4">
    <div className="card text-white bg-info mb-3 ">
      <div className="card-body">
      <CityChart />
        <h5 className="charts" >Number of Plastic requisites per city</h5>
      </div>
    </div>
  </div>
  <div className="col-4">
    <div className="card text-white bg-dark mb-3">
      <div className="card-body">
          <TypeChart />
        <h5 className="charts">Number of each type of Plastic </h5>
      </div>
    </div>
  </div>
  <div className="col-4">
  <div className="card text-white bg-info mb-3 ">
      <div className="card-body">
          <Recycling />
        <h5 className="charts">RecyclingBin</h5>
      
      </div>
    </div>
  </div>
</div>

<div className="row">
  <div className="col-4">
    <div className="card text-white bg-dark mb-3 ">
      <div className="card-body">
      <Glass />
        <h5 className="charts" >Number of Glass requisites per city</h5>
      </div>
    </div>
  </div>
  <div className="col-4">
    <div className="card text-white bg-info mb-3">
      <div className="card-body">
         <Cardboard />
        <h5 className="charts">umber of Cardboard requisites per city </h5>
      </div>
    </div>
  </div>
  <div className="col-4">
  <div className="card text-white bg-dark mb-3 ">
      <div className="card-body">
          <Paper />
        <h5 className="charts">How meany Kg of Paper requisites per city</h5>
      
      </div>
    </div>
  </div>
</div>
 

            </div>
        )
    }
}

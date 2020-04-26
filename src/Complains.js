import React, { Component } from 'react'

export default class Complains extends Component {
    render() {
       
        return (
            <div className="container-fluid">
                <br/>
                <div className="row">
                <div className="col-4">
                <div className="card">
  <div className="card-header">
    complain title 1
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">complain date/time</li>
    <li className="list-group-item">statue </li>
    <li className="list-group-item"> 
    <div className="form-group">
    <label for="exampleFormControlTextarea1">Admin comment </label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div></li>
  <li className="list-group-item"> 
  <button type="button" className="btn btn-info">Solve </button> 
  <button type="button" className="btn btn-info">cancel</button>
  </li>
  </ul>
</div>
</div>
<div className="col-4">
                <div className="card">
  <div className="card-header">
    complain title 2
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">complain date/time</li>
    <li className="list-group-item">statue </li>
    <li className="list-group-item"> 
    <div className="form-group">
    <label for="exampleFormControlTextarea1">Admin comment </label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div></li>
  <li className="list-group-item"> 
  <button type="button" className="btn btn-info">Solve </button> 
  <button type="button" className="btn btn-info">cancel</button>
  </li>
  </ul>
</div>
</div>
<div className="col-4">
                <div className="card">
  <div className="card-header">
    complain title 3
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">complain date/time</li>
    <li className="list-group-item">statue </li>
    <li className="list-group-item"> 
    <div className="form-group">
    <label for="exampleFormControlTextarea1">Admin comment </label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div></li>
  <li className="list-group-item"> 
  <button type="button" className="btn btn-info">Solve </button> 
  <button type="button" className="btn btn-info">cancel</button>
  </li>
  </ul>
</div>
</div>
</div>
            </div>
        )
    }
}

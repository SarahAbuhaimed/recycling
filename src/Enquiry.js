import React, { Component } from 'react'

export default class Enquiry extends Component {
    render() {
        return (
            <div className="container-fluid">
            <br/>
            
<div className="row">
<div className="col-4">
<div className="card">
<div className="card-header">
Enquiry title 1
</div>
<ul className="list-group list-group-flush">
<li className="list-group-item">complain date/time</li>
<li className="list-group-item">statue </li>
<li className="list-group-item"> 
<button type="button" className="btn btn-info">Done </button> 
</li>
</ul>
</div>
</div>

<div className="col-4">
<div className="card">
<div className="card-header">
Enquiry title 2
</div>
<ul className="list-group list-group-flush">
<li className="list-group-item">complain date/time</li>
<li className="list-group-item">statue </li>
<li className="list-group-item"> 
<button type="button" className="btn btn-info">Done </button> 
</li>
</ul>
</div>
</div>

<div className="col-4">
<div className="card">
<div className="card-header">
Enquiry title 3
</div>
<ul className="list-group list-group-flush">
<li className="list-group-item">complain date/time</li>
<li className="list-group-item">statue </li>
<li className="list-group-item"> 
<button type="button" className="btn btn-info">Done </button> 
</li>
</ul>
</div>
</div>
</div>
        </div>
        )
    }
}

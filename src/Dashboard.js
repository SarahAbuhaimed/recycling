import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';

export default class Dashboard extends Component {
    render() {
        return (
            <div >
                <div className="Card">
              <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Type of Plastic</th>
      <th scope="col">Number of Plastic</th>
      <th scope="col">City</th>
      <th scope="col">Order Time</th>
      <th scope="col">Time to Pick up</th>
      <th scope="col">Delete</th>
 
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Plastic dishes</td>
      <td>80</td>
      <td>Riyadh</td>
      <td>07/2/2020 03:01PM</td>
      <td>09/2/2020 05:30PM</td>
      <td><DeleteIcon /></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Plastic bag</td>
      <td>200</td>
      <td>Jeddah</td>
      <td>09/2/2020 05:00AM</td>
      <td>10/2/2020 02:22PM</td>
      <td><DeleteIcon /></td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Plastic bottle</td>
      <td>300</td>
      <td>Dammam</td>
      <td>19/3/2020 07:00PM</td>
      <td>20/3/2020 09:30AM</td>
      <td><DeleteIcon /></td>
    </tr>
  </tbody>
</table>

</div>
            </div>
        )
    }
}

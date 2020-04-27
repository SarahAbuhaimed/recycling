import React, { Component } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Tooltip from '@material-ui/core/Tooltip';

export default class Dashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
              <br/>
                <div className="Card">
              <table className="table">
  <thead className="thead-dark">
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Type </th>
      <th scope="col">Quantity</th>
      <th scope="col">City</th>
      <th scope="col">Order Time</th>
      <th scope="col">Time to Pick up</th>
      <th scope="col">Delivery Representative Phone</th>
      <th scope="col">Delivery Name</th>
      <th scope="col">Accepted</th>
      <th scope="col">Control</th>
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
      <td>0551234561</td>
      <td>Saad</td>
      <td>Yes</td>
      <td><Tooltip title="Delete"><DeleteIcon /></Tooltip>
      
        <Tooltip title="Edit"><EditIcon />
        </Tooltip>
        </td>
       
      
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Plastic bag</td>
      <td>200</td>
      <td>Jeddah</td>
      <td>09/2/2020 05:00AM</td>
      <td>10/2/2020 02:22PM</td>
      <td>0561234546</td>
      <td>Mohammed</td>
      <td>No</td>
      <td><Tooltip title="Delete"><DeleteIcon /></Tooltip>
      
        <Tooltip title="Edit"><EditIcon />
        </Tooltip>
        </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Plastic bottle</td>
      <td>300</td>
      <td>Dammam</td>
      <td>19/3/2020 07:00PM</td>
      <td>20/3/2020 09:30AM</td>
      <td>0541232456</td>
      <td>Fahad</td>
      <td>yes</td>
      <td><Tooltip title="Delete"><DeleteIcon /></Tooltip>
      
        <Tooltip title="Edit"><EditIcon />
        </Tooltip>
        </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>Glass</td>
      <td>100</td>
      <td>Hail</td>
      <td>19/4/2020 07:00PM</td>
      <td>20/4/2020 09:30AM</td>
      <td>0501234576</td>
      <td>Salem</td>
      <td>yes</td>
      <td><Tooltip title="Delete"><DeleteIcon /></Tooltip>
      
        <Tooltip title="Edit"><EditIcon />
        </Tooltip>
        </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>Paper</td>
      <td>2KG</td>
      <td>Alqasem</td>
      <td>4/4/2020 03:00PM</td>
      <td>9/4/2020 10:30AM</td>
      <td>05052345766</td>
      <td>mohamed</td>
      <td>yes</td>
      <td><Tooltip title="Delete"><DeleteIcon /></Tooltip>
      
        <Tooltip title="Edit"><EditIcon />
        </Tooltip>
        </td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>Metal</td>
      <td>3KG</td>
      <td>Dammam</td>
      <td>3/5/2020 01:30PM</td>
      <td>4/5/2020 09:36AM</td>
      <td>05552345466</td>
      <td>Khaled</td>
      <td>yes</td>
      <td><Tooltip title="Delete"><DeleteIcon /></Tooltip>
      
      <Tooltip title="Edit"><EditIcon />
      </Tooltip>
      </td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>Cardboard</td>
      <td>70</td>
      <td>Riyadh</td>
      <td>19/3/2020 07:00PM</td>
      <td>20/3/2020 09:30AM</td>
      <td>05052343549</td>
      <td>Malek</td>
      <td>No</td>
      <td><Tooltip title="Delete"><DeleteIcon /></Tooltip>
      
        <Tooltip title="Edit"><EditIcon />
        </Tooltip>
        </td>
    </tr>
  </tbody>
</table>

</div>
            </div>
        )
    }
}

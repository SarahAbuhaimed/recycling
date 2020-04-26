import React, { Component } from 'react'
import { Input, Col, FormGroup, Label, Button} from 'reactstrap'

export default class login extends Component {
    render() {
        return (
              <div>
            <Col sm={3} md={4} className="mx-auto space ">
             <FormGroup>
                  <Label for="exampleEmail" sm={2}><b>Email</b> </Label>
                <Input name="email"  className="badge-pill"/>
             </FormGroup>
             <FormGroup>
                  <Label for="exampleEmail" sm={2}><b>Password</b> </Label>
                  <Input name="password" type="password"   className="badge-pill"/>
              </FormGroup>
              <Button className="btn  badge-pill badge-info" size="lg" block ><b>Login</b></Button>
             
             </Col>
            </div>
        )
    }
}

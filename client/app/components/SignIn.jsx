import React from 'react';
import Grid from 'react-bootstrap/lib/Grid'
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Button from 'react-bootstrap/lib/Button';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  onUserNameChange(event) {
    this.setState({
      username: event.target.value
    });
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }
	
	onSubmit() {
		$.ajax({
		  type:'POST',
		  url: 'http://localhost:3000/users/signIn',
		  data: JSON.stringify({username: this.state.username, password: this.state.password}),
		  contentType: 'application/json',
		  success: (username) => {
        
		  }
		});
	}

  render () {
    return (
          <Grid>
            <Row>
              <Col xs={7} sm={5} md={4} className="authComponent">
                <h1 className="welcome">Welcome Back</h1>
              </Col>
            </Row>
            
            <Form horizontal>
              <Row>
                <Col xs={7} sm={5} md={4} className="authComponent">
                  <FormGroup controlId="formHorizontalEmail">
                    <FormControl type="email" placeholder="Email address" onChange={this.onUserNameChange.bind(this)} />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs={7} sm={5} md={4} className="authComponent">
                  <FormGroup controlId="formHorizontalPassword">
                    <FormControl type="password" placeholder="Password" />
                  </FormGroup>
                </Col>
              </Row>

              <Row>
                <Col xs={7} sm={5} md={4} className="authComponent">
                  <FormGroup>
                      <Button type="submit" bsStyle="primary" block onClick={this.onSubmit.bind(this)}> Sign in </Button>
                  </FormGroup>
                </Col>
              </Row>
            </Form>
          </Grid>
        )
  }
}
export default SignIn;
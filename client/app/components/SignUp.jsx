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

class SignUp extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
      confirmedPassword: ''
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

  onConfPasswordChange(event) {
    this.setState({
      confirmedPassword: event.target.value
    })
  }

  handleSubmit() {
    if (this.state.password === this.state.confirmedPassword) {
      console.log('The passwords match!');
    } else {
      console.log('Your passwords don\'t match. Get your act together!')
    }
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

	onSubmit() {
		$.ajax({
		  type:'POST',
		  url: 'http://localhost:3000/users/signUp',
		  data: JSON.stringify({username: this.state.username, password: this.state.confirmedPassword}),
		  contentType: 'application/json',
		  success: (username) => {
		  }
		});
	}

  render () {
      return (
        <Grid>
          <Row>
            <Col xs={7} sm={6} md={6} className="authComponent">
              <h1 className="welcome">Pleased to Meet You</h1>
            </Col>
          </Row>
          
          <Form horizontal>
            <Row>
              <Col xs={7} sm={5} md={4} className="authComponent">
                <FormGroup controlId="formHorizontalEmail">
                  <FormControl 
                    type="email" 
                    placeholder="Email address" 
                    onChange={ this.onUserNameChange.bind(this) } />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={7} sm={5} md={4} className="authComponent">
                <FormGroup controlId="formHorizontalPassword">
                  <FormControl 
                    type="password" 
                    placeholder="Password"
                    onChange={ this.onPasswordChange.bind(this) } />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={7} sm={5} md={4} className="authComponent">
                <FormGroup controlId="formHorizontalPassword">
                  <FormControl 
                    type="password" 
                    placeholder="Confirm password"
                    onChange={ this.onConfPasswordChange.bind(this) } />
                </FormGroup>
              </Col>
            </Row>

            <Row>
              <Col xs={7} sm={5} md={4} className="authComponent">
                <FormGroup>
                    <Button type="submit" bsStyle="primary" block onClick={this.onSubmit.bind(this)}>Sign in</Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Grid>
      )
  }
}

export default SignUp;

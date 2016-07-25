import React from 'react';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

class MyNav extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">EatUp</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullLeft>
            <FormGroup>
               <FormControl
                  id="searchTextField"
                  type="text"
                  placeholder="Search for a place"
                  onChange={ this.props.handleSearchChange }
                />
            </FormGroup>
            {' '}
            <Button type="submit" onClick={ this.props.handleSubmit } bsStyle="primary">Create Eatup</Button>
          </Navbar.Form>
          <Nav pullRight>
            <LinkContainer to={{ pathname: '/SignUp'}}><NavItem eventKey={1} href="#">Signup</NavItem></LinkContainer>
            <LinkContainer to={{ pathname: '/SignIn'}}><NavItem eventKey={2} href="#">Signin</NavItem></LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }

};

export default MyNav;
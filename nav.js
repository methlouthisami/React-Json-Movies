import React from "react";
import {Nav,
  Navbar,
  Form,
  Button,
  NavDropdown,
  FormControl,
} from "react-bootstrap";

function Navi() {
  return (
    <div>
      <Navbar bg="dark" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto ">
            <Nav.Link className="text-white" href="#home">Home</Nav.Link>
            <Nav.Link href="#link"className="text-white">favoris</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown"className="text-white">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Navi;

import React from 'react';
//import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const NavigationBar = ({ query, setQuery }) => {
  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };


  return (
    <Navbar expand="lg" className="bg-primary sticky-top">
      <Container fluid>
        <Navbar.Brand href="#">Epic BookShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
            <NavDropdown title="Browse" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                Fantasy
                </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Sci-Fi
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                History
              </NavDropdown.Item>
              <NavDropdown.Item href="#action3">
                Horror
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">
                Romance
                </NavDropdown.Item>
            </NavDropdown>
            </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              value={query}
              onChange={handleInputChange}
              aria-label="Search"
            />
            {/* <Button variant="outline-dark">Search</Button> */}
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
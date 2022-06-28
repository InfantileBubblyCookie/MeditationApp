import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
function header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/home">KG</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/videos">Videos</Nav.Link>
            <Nav.Link href="/meditations">Meditation Timers</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br/>
    </> 

  )
}

/* BsFillHouseDoorFill */
export default header
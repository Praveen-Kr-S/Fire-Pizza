import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./App_NavBar.css"
import Cart from './Cart';

const App_NavBar = () => {
  return (
    <Navbar expand="lg" bg='light'>
      <Container>
        <Navbar.Brand href="#home"><h2 className='text-primary'><span><i className="bi bi-yelp"></i>Fire Pizza</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="#home" className='fw-bold'>Home</Nav.Link>
            <Nav.Link href="#menu" className='fw-bold'>Menu</Nav.Link>
            <Nav.Link href="#musttry" className='fw-bold'>Must Try</Nav.Link>
            <Nav.Link href="#contact" className='fw-bold'>contact us</Nav.Link> 
             <Cart />    
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default App_NavBar
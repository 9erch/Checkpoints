import React from 'react'
import { Nav } from 'react-bootstrap'

function Menu() {
  return (
    <div>
      
        <Nav  className='menu-center'>
  <Nav.Item>
    <Nav.Link to="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to="/About-Us">About Us</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to="/Forum">Services</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link to="/Forum">Contact US</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  </Nav.Item>
</Nav>

    </div>
  )
}

export default Menu
import React from 'react'
import { Nav } from 'react-bootstrap'


function Menu() {
  return (
    <div>
     
        <Nav  className='menu-center'>
  <Nav.Item>
    <Nav.Link href="/">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/About">About Us</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/Services-page">Services</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/Contact-us">Contact US</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href="/FAQ">FAQ</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  </Nav.Item>
</Nav>


    </div>
  )
}

export default Menu
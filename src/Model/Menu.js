import React from 'react'
import { Nav } from 'react-bootstrap'

function Menu() {
  return (
    <div>
        <Nav  className='menu-center'
  activeKey="/home"
  onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
>
  <Nav.Item>
    <Nav.Link href="/home">Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1">About Us</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Services</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-2">Contact US</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  </Nav.Item>
</Nav>

    </div>
  )
}

export default Menu
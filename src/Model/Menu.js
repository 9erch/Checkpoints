import React from 'react'
import { Col, Container, Nav, Row } from 'react-bootstrap'


function Menu() {
  return (
    <div>
      
       <Row className='menu-center'>
       <Col xs={3}>
       
       <Nav.Link href="/"><img src="/logo-khalil-ghanmi-finale-blanc.svg" width={150}/></Nav.Link>
       </Col>
       <Col xs={6}>
       <Nav className='menu-text'>
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
    <Nav.Link href="/Shop">Shop</Nav.Link>
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
       </Col>
       </Row>

    </div>
  )
}

export default Menu
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
    <div className='footer'>
      <Container>   
    <Row >
    <Col xs={2} >
    
   </Col>
        <Col xs={4} >
   <img src="/logo.png" width={170}/>
   </Col>
  
   <Col xs={6} className="footer-text ">
   <p>© Tous droits réservés 2022</p>
   
    </Col>
    
       
  
   </Row>
   
   </Container>

    </div>
  )
}

export default Footer
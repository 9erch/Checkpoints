import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function Footer() {
  return (
  <footer className='footer'>
    <div >
        
        <Container>   
    <Row >
    <Col xs={2} >
    
   </Col>
        <Col xs={4} >
   <img src="/logo-khalil-ghanmi-finale-blanc.svg" width={300}/>
   </Col>
  
   <Col xs={6} className="footer-text ">
   <p>© Tous droits réservés 2022</p>
   
    </Col>
    
       
  
   </Row>
   
   </Container>

        

    </div>
    </footer>
      
  )
}

export default Footer
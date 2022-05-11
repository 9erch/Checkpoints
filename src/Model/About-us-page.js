import React from 'react'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import Myteams from './Objet-team';
function About_us_page() {
  return (
    
    <Container>
        <div className="blues title" >
        <h3>About us</h3>
    </div>
    <Row >
   <Col xs={6}>
   <img src="about-us.png" width={600}/>
   </Col>
  
   <Col xs={6} className='class-about'>
    <h3>Qui sommes-nous</h3>
    <p>
    La Fondation Khalil Al-Ghanimi a vu le jour à Riyad, où elle s'efforce de trouver des solutions techniques et des cadres humains spécialisés dotés d'une grande 
    expertise pour contribuer à la réalisation de la transformation numérique et fournir des consultations par le biais d'une équipe de travail et de consultants distingués.
    </p>
  
   </Col>
  
   </Row>
   <Row>
   <div className="blues title" >
        <h3>Les équipes</h3>
    </div> 
      
       {
   Myteams.map(Myteams =>
    <Col xs={4}>
   <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={Myteams.imageUrlt} />
    <Card.Body>
      <Card.Title>{Myteams.titlet}</Card.Title>
      <Card.Text>
      {Myteams.descriptiont}
      </Card.Text>
      <Button href={Myteams.linkto} target="_blank">Link portfolio</Button>
    </Card.Body>
  </Card>
  </Col>
   
   )
  }
   </Row>
   </Container>  


  )
}

export default About_us_page ;
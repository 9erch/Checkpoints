import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function About() {
  return (
    <Container>
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
   </Container>
  )
}

export default About
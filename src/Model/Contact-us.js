import React from 'react'
import { Col, Container, Form, Row, Button } from 'react-bootstrap'


function Contactus() {
  return (
    <div >
        <h3 className='class-about blues'>Contactez Nous</h3>
        <Container>
    <Row >
   <Col xs={6} >
   <Form>
   <Row >
   <Col xs={6}>
   <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Nom</Form.Label>
    <Form.Control type="text"  />
    <Form.Text className="text-muted">
    Nous ne partagerons jamais votre nom avec quelqu'un d'autre.
    </Form.Text>
  </Form.Group>

   </Col>
   <Col xs={6}>
   <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Entrez le prénom</Form.Label>
    <Form.Control type="email"  />
    <Form.Text className="text-muted">
    Nous ne partagerons jamais votre prénom avec qui que ce soit d'autre.
    </Form.Text>
  </Form.Group>

   </Col>
   </Row>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email"  />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicSubject">
    <Form.Label>Entrez le sujet</Form.Label>
    <Form.Control type="text"  />
    <Form.Text className="text-muted">
    Nous ne partagerons jamais votre sujet avec quelqu'un d'autre.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
    <Form.Label>Message</Form.Label>
    <Form.Control as="textarea" rows={3} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
   </Col>
  
   <Col xs={6} >
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12778.75869022277!2d10.134835732990163!3d36.8019902291691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd33bfce532065%3A0xc74bdbce39976d53!2sCite%20somrane!5e0!3m2!1sfr!2stn!4v1652181267190!5m2!1sfr!2stn" width={600} height={450}  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </Col>
  
   </Row>
   </Container>

    </div>
  )
}

export default Contactus
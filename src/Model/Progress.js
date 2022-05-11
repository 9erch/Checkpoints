import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import ProgressBar from 'react-bootstrap/ProgressBar'
function Progress() {
  return (
    <div>
         <Container>
  <Row >
  <Col xs={6}>
      <div className="blues title" >
        <h3>Qualité & Efficacité</h3>
        <h3>Appels rapides & sécurisés.</h3>
    </div>
     
        <h5>HTML 5 / CSS 3</h5>
        <ProgressBar variant="success" label={`40%`} now={40} />
        <h5>JavaScript / jquery</h5>
        <ProgressBar variant="info" label={`20%`} now={20} />
        <h5>PHP / MYSQL</h5>
        <ProgressBar variant="warning" label={`60%`} now={60} />
        <h5>Wordpress</h5>
        <ProgressBar variant="danger" label={`80%`} now={80} />
        </Col>
        <Col xs={6}>
        <img src="ProgressBar.jpg" width={600}/>
        
            </Col>
        </Row>
        </Container>
    </div>
  )
}

export default Progress
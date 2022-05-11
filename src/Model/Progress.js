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
        <h3>CODING</h3>
    </div>
      <p>HTML 5 / CSS 3</p>
        <ProgressBar variant="success" label={`40%`} now={40} />
        <p>JavaScript / jquery</p>
        <ProgressBar variant="info" label={`20%`} now={20} />
        <p>PHP / MYSQL</p>
        <ProgressBar variant="warning" label={`60%`} now={60} />
        <p>Wordpress</p>
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
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import myservices from './Objet-services'
import Services from './Services';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Progress from './Progress';
function Services_page() {
  return (
    <div>
        <div className="blues title" >
        <h3>Services</h3>
    </div> 
        <Container className='title'>
  <Row >
    {
    myservices.map(myservices =>
    <Col xs={4}>
    {/* <Cart  url={Mycartes.imageUrl} titre={Mycartes.title} descriptions={Mycartes.description}  /> */}
    <Services  url={myservices.imageUrls} titre={myservices.titles} descriptions={myservices.descriptions}  />
    </Col>
   )
  }
      
      </Row>
      </Container>
      <Progress></Progress>

    </div>
  )
}

export default Services_page ;
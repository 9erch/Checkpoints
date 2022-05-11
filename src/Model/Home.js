import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import About from './About'
import Contactus from './Contact-us'
import myportfolio from './Objet-portfolio'
import myservices from './Objet-services'
import Portfolio from './Portfolio'
import Progress from './Progress'
import Services from './Services'
import ControlledCarousel from './Slide'

function Home() {
  return (
    <div>
        

        <ControlledCarousel />
      <About />
      <div className="blues title" >
        <h3>Services</h3>
    </div> 
      
      <Container>
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
      <Progress />
      {/* <Progress />
      <Forum />
      <Model /> */}
      <div className="blues title" >
        <h3> Portfolio</h3>
    </div>

     <Container>
  <Row >

    {
    myportfolio.map(myportfolio =>
    <Col xs={3}>
    {/* <Cart  url={Mycartes.imageUrl} titre={Mycartes.title} descriptions={Mycartes.description}  /> */}
    <Portfolio  url={myportfolio.imageUrl} titre={myportfolio.title} descriptions={myportfolio.description}  />
    </Col>
   )
  }
      
      </Row>
       <Contactus />
      </Container>

    </div>
  )
}

export default Home;
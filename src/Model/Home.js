import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import About from './About'
import Contactus from './Contact-us'
import myportfolio from './Objet-portfolio'
import Portfolio from './Portfolio'
import Progress from './Progress'
import ControlledCarousel from './Slide'

function Home() {
  return (
    <div>
        

        <ControlledCarousel />
      <About />
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

import './App.css';
import Cart from './Model/cart';
import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Mycartes from './Model/objet';
import Forum from './Model/Forum';
import Model from './Model/Model';
import Menu from './Model/Menu';
function App() {
  return (
    <div className="App">
      <Menu />
      <Forum />
      <Model />
     <Container>
  <Row >
   
    {
    
   Mycartes.map(Mycartes =>
    <Col xs={3}>
    <Cart  url={Mycartes.imageUrl} titre={Mycartes.title} descriptions={Mycartes.description}  />
    </Col>
   
   )
  }
      
      </Row>
      </Container>
    </div>
  );
}

export default App;

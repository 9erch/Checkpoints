import './App.css';
import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import Menu from './Model/Menu';
import About from './Model/About';
import Footer from './Model/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Model/Home';
import Contactus from './Model/Contact-us';
import FAQ from './Model/FAQ';
import Services from './Model/Services';
import Services_page from './Model/Services-page';
function App() {
  return (
    <div className="App">
      <Menu />
<BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Home />}>         
      
      </Route>
      <Route path="About-us" element={<About />} />
      <Route path="api" element={<About />} />
      <Route path="Contact-us" element={<Contactus />} />
      <Route path="FAQ" element={<FAQ />} />
      <Route path="Services-page" element={<Services_page />} />
      
      </Routes>
    </BrowserRouter>
    
     <Row>
      
     </Row>
     <Footer>
     <Footer />
     </Footer>
     
    </div>
  );
}

export default App;

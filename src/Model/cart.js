import React from "react";
import './cart.css';
import { Button, Card,} from "react-bootstrap";

// import { macarte } from "./objet";
 function cart(proprs){
 return(
<div>
    
      <Card>
       <Card.Img variant="top" src={proprs.url} />
        <Card.Body>
        <Card.Title>
          {proprs.titre}
        </Card.Title>
        <Card.Text>
       {proprs.descriptions}
        </Card.Text>
     <Button variant="primary">Add to Cart</Button>
     </Card.Body>
      </Card>
    
  

    </div>
 )
  
    
  
  }

export default cart;
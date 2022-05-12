import React from "react";
import './cart.css';
import { Button, Card,} from "react-bootstrap";

// import { macarte } from "./objet";
 function Portfolio(proprs){
 return(
<div className="title">
   
      <Card>
       <Card.Img variant="top" width={300} src={proprs.url} />
        <Card.Body>
        <Card.Title>
          {proprs.titre}
        </Card.Title>
        <Card.Text>
       {proprs.descriptions}
        </Card.Text>
     <Button href={proprs.lien} target="_blank" variant="primary" >Voir Plus</Button>
     </Card.Body>
      </Card>
    
  

    </div>
 )
  
    
  
  }

export default Portfolio;
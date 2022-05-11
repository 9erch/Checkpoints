import React from 'react'
import { Card } from 'react-bootstrap'

function Services(proprs) {
  return (
    <div>
  <Card.Body className='services-cart' style={{ width: '80%' }}>
  <Card.Img className='cart-services' variant="top"  src={proprs.url}  />
    <Card.Title className="mb-2 text-muted">{proprs.titre}</Card.Title>
    <Card.Text>
    {proprs.descriptions}
    </Card.Text>
     </Card.Body>


    </div>
  )
}

export default Services
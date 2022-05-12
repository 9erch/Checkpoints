import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Shop_list({shop}) {
  return (
    <div>
        
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={shop.image} height={300} />
  <Card.Body>
    <Card.Title>{shop.title}</Card.Title>
    <Card.Text>
    {shop.description}
    </Card.Text>
    <Card.Title>{shop.price}</Card.Title>
    <Button variant="primary">{shop.category}</Button>
  </Card.Body>
</Card>

    </div>
  )
}

export default Shop_list;
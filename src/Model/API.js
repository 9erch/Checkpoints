import   Axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ShopList from './Shop-list';

function Shop() {
    const [shop, setshop] = useState([]);
     useEffect(() => {
          Axios
          .get('http://fakestoreapi.com/products')
          .then((res)=>setshop(res.data))
          .catch((err)=> console.log(err));
     }, [])
     
    console.log({ msg: "list of shop",shop}); 
     

  return (
    <div>
        
        <h3 className='class-about blues title-page'>Shop</h3>
        <Container>
            <Row>
{
    shop.map((shop)=>(
       
                <Col xs={4}>
                <ShopList shop={shop} />
                </Col>
           
    
    ))
}
</Row>
        </Container>
    </div>
  )
}

export default Shop
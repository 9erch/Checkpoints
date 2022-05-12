import   Axios from 'axios'
import React, { useEffect, useState } from 'react'

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
        
        <h3 className='class-about blues'>Shop</h3>

    </div>
  )
}

export default Shop
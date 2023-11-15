import React from 'react'
import './product.css'
const Products = ({action}) => {
  return (
    <div onMouseLeave={(e)=>action()} >
    <div className='box1'>
       <div className='ul'> 
        <span className="span">Online Ordering System  </span>
        <span className="span">Loyalty Program Softwear </span>
        <span1 className="span">Tikme pay </span1>
        <span1 className="span">Google review </span1>
        <span className="span">Centralize Ordering System</span>
        
       </div>

    </div>
      
     </div>
  )
}

export default Products

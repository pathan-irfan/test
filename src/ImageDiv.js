import React from 'react';
import './imageDiv.css'; // Assuming your CSS file is named imageDiv.css

function ImageDiv() {
  return (
    <div className='divOne'>
      <div className='childDiv'>
        <h1 className='divH1'>More Reasons to Partner with TikMe!</h1>
        <div className='childOne'>
            <p className='one'><i class="fa-solid fa-clock"></i></p>
          
            <p className='oneN'><i class="fa-solid fa-sack-dollar" ></i></p>
        </div>
        <div className='childTwo'>        
        <p className='one1'>Excellent Customer Support </p>

        <p className='one2'>No Order Based Commissions  </p>
        </div>

        <div className='childTwo3'>        
        <p className='one4'>        Involve in providing timely, professional assistance, actively listening to customers, and going above and beyond to ensure satisfaction and build positive relationships
 </p>

        <p className='one5'>We don't charge commissions based on orders. Our transparent pricing model ensures fair and affordable pricing, regardless of order volume, so you can focus on growing your business.  </p>
        </div>
      </div>
    </div>
  );
}

export default ImageDiv;

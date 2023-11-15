import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import card from './crad.css'; // Assuming your CSS file is named card.css

const Card = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  

  return (
    <>
      <div className="cardName">
        <Slider ref={sliderRef} {...settings}>
       
         <div className="secondDIVV">
<div className='gggg'> <i class="fa-solid fa-quote-left" style={{color:"orangered",fontSize:"50px",marginLeft:"40%"}}></i>  

 <p className='Apublic'>A public eating establishment similar to a restaurant is mentioned in a 512 BC record from Ancient Egypt. It served only one dish, a plate of cereal, wild fowl, and onions.[5]

A forerunner of the modern restaurant is the thermopolium, an establishment in Ancient Greece and Ancient Rome that sold and served ready-to-eat food and beverages. These establishments were somewhat similar in function to modern fast food restaurants. They were most often frequented by people who lacked private kitchens. In the Roman Empire they were popular among residents of insulae.[6] </p>
<div className='circal'>
  <img src='https://img.pikbest.com/png-images/find-food-restaurant-logo-template_2329151.png!f305cw' alt='' className='img1'/>
</div>
 </div>
<div className='gggg1'><i class="fa-solid fa-quote-left" style={{color:"orangered",fontSize:"50px",marginLeft:"40%"}}></i>  
<p className='Apublic'>A public eating establishment similar to a restaurant is mentioned in a 512 BC record from Ancient Egypt. It served only one dish, a plate of cereal, wild fowl, and onions.[5]

A forerunner of the modern restaurant is the thermopolium, an establishment in Ancient Greece and Ancient Rome that sold and served ready-to-eat food and beverages. These establishments were somewhat similar in function to modern fast food restaurants. They were most often frequented by people who lacked private kitchens. In the Roman Empire they were popular among residents of insulae.[6] </p>
<div className='circal'>
<img src='https://img.pikbest.com/png-images/find-food-restaurant-logo-template_2329151.png!f305cw' alt='' className='img1'/>

</div>
</div>
<div className='gggg2'><i class="fa-solid fa-quote-left" style={{color:"orangered",fontSize:"50px",marginLeft:"40%"}}></i> 
<p className='Apublic'>A public eating establishment similar to a restaurant is mentioned in a 512 BC record from Ancient Egypt. It served only one dish, a plate of cereal, wild fowl, and onions.[5]

A forerunner of the modern restaurant is the thermopolium, an establishment in Ancient Greece and Ancient Rome that sold and served ready-to-eat food and beverages. These establishments were somewhat similar in function to modern fast food restaurants. They were most often frequented by people who lacked private kitchens. In the Roman Empire they were popular among residents of insulae.[6]
<div className='circal1'>
<img src='https://img.pikbest.com/png-images/find-food-restaurant-logo-template_2329151.png!f305cw' alt='' className='img1'/>

</div>
</p>
 </div>

            </div>
            <div className="secondDIVV">
<div className='gggg'><i class="fa-solid fa-quote-left" style={{color:"orangered",fontSize:"50px",marginLeft:"40%"}}></i> 
<p className='Apublic'>A public eating establishment similar to a restaurant is mentioned in a 512 BC record from Ancient Egypt. It served only one dish, a plate of cereal, wild fowl, and onions.[5]

A forerunner of the modern restaurant is the thermopolium, an establishment in Ancient Greece and Ancient Rome that sold and served ready-to-eat food and beverages. These establishments were somewhat similar in function to modern fast food restaurants. They were most often frequented by people who lacked private kitchens. In the Roman Empire they were popular among residents of insulae.[6] </p>
<div className='circal'>
<img src='https://img.pikbest.com/png-images/find-food-restaurant-logo-template_2329151.png!f305cw' alt='' className='img1'/>

</div>
</div>
<div className='gggg1'><i class="fa-solid fa-quote-left" style={{color:"orangered",fontSize:"50px",marginLeft:"40%"}}></i>
<p className='Apublic'>A public eating establishment similar to a restaurant is mentioned in a 512 BC record from Ancient Egypt. It served only one dish, a plate of cereal, wild fowl, and onions.[5]

A forerunner of the modern restaurant is the thermopolium, an establishment in Ancient Greece and Ancient Rome that sold and served ready-to-eat food and beverages. These establishments were somewhat similar in function to modern fast food restaurants. They were most often frequented by people who lacked private kitchens. In the Roman Empire they were popular among residents of insulae.[6] </p>
<div className='circal'>
<img src='https://img.pikbest.com/png-images/find-food-restaurant-logo-template_2329151.png!f305cw' alt='' className='img1'/>

</div>
</div>
<div className='gggg2'><i class="fa-solid fa-quote-left" style={{color:"orangered",fontSize:"50px",marginLeft:"40%"}}></i>
<p className='Apublic'>A public eating establishment similar to a restaurant is mentioned in a 512 BC record from Ancient Egypt. It served only one dish, a plate of cereal, wild fowl, and onions.[5]

A forerunner of the modern restaurant is the thermopolium, an establishment in Ancient Greece and Ancient Rome that sold and served ready-to-eat food and beverages. These establishments were somewhat similar in function to modern fast food restaurants. They were most often frequented by people who lacked private kitchens. In the Roman Empire they were popular among residents of insulae.[6]
<div className='circal1'>
<img src='https://img.pikbest.com/png-images/find-food-restaurant-logo-template_2329151.png!f305cw' alt='' className='img1'/>

  </div> </p>
</div>

            </div>
       
        </Slider>
     
      </div>
    </>
  );
};

export default Card;

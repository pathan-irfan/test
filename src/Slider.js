import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slider from './slider.css'
import ImageDiv from './ImageDiv';
import Card from './Card';
import Form from './Form';
function ImageSlider() {
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

 

  return (
    <>
    <div id='mainSliderDiv'>
      <h1 className='Restaurants'>500+ Restaurants in Canada Enjoying</h1>
      <h1 className='More'> More Revenues using TikMe.</h1>
<p className='Make'>Make More People Enjoy the Taste of Your Restaurant Food.</p>
    <Slider {...settings } >
   
      <div className='sliderDiv'>
      
        <img src="https://tikme.co/wp-content/uploads/2023/05/indian-restaurants-in-brampton.png.webp" alt="slide1" />
      </div>
      <div className='sliderDiv'>
       
        <img src="https://tikme.co/wp-content/uploads/2023/05/indian-restaurants-in-toronto.png.webp" alt="slide2" />
      </div>
    
      <div className='sliderDiv'>
       
       <img src="https://tikme.co/wp-content/uploads/2023/05/indian-restaurants-in-toronto.png.webp" alt="slide2" />
     </div>
    
    </Slider>
    <button className='Demo'>Request Demo</button>
    </div>
    
    <ImageDiv/>
   <Card/>
   <Form/>
   
   <footer className='footer'>
   <div className='footerDivOne'>
    <div className='footerChildOne'>
      <p className='Download' >Download</p>
     
     <p className='Find'>Find your favorite food item and restaurant, and place your food order either on TikMe mobile app or the TikMe website.</p>
     <p className='playStore'>
     <i class="fa-brands fa-google-play" style={{fontSize:"20px",marginTop:"10%"}}></i> Playstore
    |AppStore </p>
    </div>
    <div className='footerChildTwo'>
      <p className='Download'>Contact Info</p>
      <p className='Find'>
      
Canada Office Address:
1585 Britannia Rd E, B4,
Mississauga, ON, L4W 2M4</p>
<p className='Find'><i class="fa-solid fa-flag-usa" style={{margin:"3%"}}></i>USA Office Address:
4220 Hyde Park Blvd, Unit#15679,
Niagara Falls, NY, 14305</p>
<p className='Find'> <i class="fa-solid fa-phone-volume" style={{margin:"3%"}}></i>+1 (416) 907 - 4665</p>
<p className='Find'> <i class="fa-solid fa-envelope" style={{margin:"3%"}}></i>sales@tikme.co
support@tikme.co</p>
    </div>
    <div className='footerChildThree'>
      <p className='Download'>Our Products</p>
      <p className='Find'>
    Online Ordering System
    Loyalty Program Software
    TikMe Pay - SMS Payments
    Smart Online Review System
    Centralized Ordering System </p>
    </div>
    <div className='footerChildFour'>
      <p className='Download'>Company</p>
      <p className='Find'>
    Request Demo
    Restaurant Login
    Terms & Conditions
    Privacy Policy </p>
    </div>
   
   </div>
   <center><p style={{fontSize:"15px",color:"white"}}>Copyright © 2023 | All Rights Reserved</p></center>
   </footer>
    </>
  );


  
}

export default ImageSlider;

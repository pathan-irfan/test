import React from 'react'
import main from './main.css'
import Slider from './Slider'
function Main() {
  return (
    <div className='allone'>
    <div className='mainDiv'>
        <div className='nameDiv'>
      <h1 className='first'>Delivering Digital Solutions for<br/> Restaurants - Canada & USA</h1>
      <p className='pra'>Streamline your restaurant’s operations and enhance customer satisfaction with our digital solutions. Increase your restaurant revenue by improving your customer experience!</p>
      <p className='Spr'> <i class="fa-regular fa-circle-check" style={{backgroundColor:"orangered",color:"white",borderRadius:"50%"}}></i> Zero Commission Online Ordering System </p>
      <p className='Spr'> <i class="fa-regular fa-circle-check" style={{backgroundColor:"orangered",color:"white",borderRadius:"50%"}}></i> Loyalty Software for Restaurants</p>
      <p className='Spr'> <i class="fa-regular fa-circle-check" style={{backgroundColor:"orangered",color:"white",borderRadius:"50%"}}></i> Instant Payment Solution for Telephone Orders</p>
      <p className='Spr'> <i class="fa-regular fa-circle-check" style={{backgroundColor:"orangered",color:"white",borderRadius:"50%"}}></i> Smart Review System to Improve Google Reviews</p>
    <a href='./Form.js'>  <button className='btn3'>Request Demo </button></a>
      </div>
      <div className='secondDiv'>
      <img src='https://tikme.co/wp-content/uploads/2023/04/Increase-Your-Restaurant-Revenue-By-Improving-Your-Customer-Experience-tikme-1-1.png.webp' alt='' className='resimg'/>
      </div>
      
    </div>
<div className='SecondDiv'>
    <div className='imgAndPraDiv'>
<img src='https://tikme.co/wp-content/uploads/2023/04/Online-Order-1.png.webp' alt="" className='secondimg'/>

<div className='secondName'>
<p className='tikme'>TikMe Online Ordering Platform</p>
<h1 className='Onlineh1'> Online Ordering System</h1>


<p className='Digitize'>Digitize your restaurant with our ready-to-use online ordering system. Allowing to start accepting online orders and increase revenue while enhancing customer convenience and improving your efficiency.</p>
<div className='ulliDiv'>
<ul >
    <li>Go Online In 24 Hours</li>
    <li>Zero Commission On all Your Orders</li>
    <li>Integrate with Loyalty Rewards</li>
    <li>Easy Payments with Apple Pay & Google Pay</li>
</ul>
</div>
<button className='btn4'> Know More</button>
</div>
</div>
</div>
{/* //////////////////////////////////////////////////////////////////////////////// */}

<div className='SecondDiv3'>
    <div className='imgAndPraDiv'>

    <div className='secondName'>
<p className='tikme'>TikMe Customer Loyalty Program</p>
<h1 className='Onlineh1'> Loyalty Program Software</h1>


<p className='Digitize'>Increase customer satisfaction and drive revenue growth with a loyalty program by rewarding customers with offers and coupons for repeat business and retention.</p>
<div className='ulliDiv'>
<ul >
    <li>Increase the Customer Retention</li>
    <li>Build Repeat Business</li>
   
    <li>Online Promotions to the Customers </li>
</ul>
</div>
<button className='btn4'> Know More</button>
</div>
<img src='https://tikme.co/wp-content/uploads/2023/04/Loyalty-Rewards-1.png.webp' alt="" className='secondimg3'/>
</div>
</div>
{/* //////////////////////////////////////////////////////////////////////////////// */}
<div className='SecondDiv'>
    <div className='imgAndPraDiv'>
<img src='https://tikme.co/wp-content/uploads/2023/04/Secured-Payments-For-Telephone-Orders-1.png.webp' alt="" className='secondimg'/>

<div className='secondName'>
<p className='tikme'>TikMe Pay</p>
<h1 className='Onlineh1'>Secured Payments For Telephone Orders</h1>


<p className='Digitize'> Simplify your restaurant’s payment process with TikMe Pay, a secure and efficient payment solution designed to provide a smooth payment experience for customers and make payment processing easier ultimately saving you time and increasing revenue.</p>
<div className='ulliDiv'>
<ul >
    <li>Collect the Payments Instantaneously Before Processing the Order</li>
    <li>Reduce No Shows and Food Wastage</li>
    <li>Build Your Customer Data with Telephone Orders</li>
</ul>
</div>
<button className='btn4'> Know More</button>
</div>
</div>
</div>
{/* //////////////////////////////////////////////////////////////////////////////// */}
<div className='SecondDiv3'>
    <div className='imgAndPraDiv'>

    <div className='secondName'>
<p className='tikme'>TikMe Online Reputation Business</p>
<h1 className='Onlineh1'> Instant Google Reviews</h1>


<p className='Digitize'>Enhance your restaurant’s online presence and attract more customers with an effective solution for managing Google reviews. Easily send review requests and manage customer feedback, boosting your reputation and attracting new customers to your business.</p>
<div className='ulliDiv'>
<ul >
    <li>Increase the Positive Reviews of Business on Google</li>
    <li>Bring More New Customers</li>
   
    <li>Increase the Trust and Awareness of Your Brand </li>
</ul>
</div>
<button className='btn4'> Know More</button>
</div>
<img src='https://tikme.co/wp-content/uploads/2023/04/Instant-Google-Reviews-1.png.webp' alt="" className='secondimg3'/>
</div>
</div>
{/* //////////////////////////////////////////////////////////////////////////////// */}
<div className='SecondDiv'>
    <div className='imgAndPraDiv'>
<img src='https://tikme.co/wp-content/uploads/2023/04/Centralized-Ordering-System-1.png.webp' alt="" className='secondimg'/>

<div className='secondName'>
<p className='tikme'> TikMe Centralized Ordering System </p>
<h1 className='Onlineh1'> Centralized Ordering System </h1>


<p className='Digitize'> Enhance your restaurant’s order management by ensuring that all telephonic orders are accurately processed and efficiently managed, eliminating the risk of missing any customer’s order and expanding your customer base..</p>
<div className='ulliDiv'>
<ul >
    <li>Helps in Reducing Operation Cost</li>
    <li>Better Tracking of Aggregate Orders</li>
    <li>Never Miss a Call or Order Again</li>
    <li>Multi Franchise Management</li>

</ul>
</div>
<button className='btn4'> Know More</button>
</div>
</div>
</div>
<Slider/>


    </div>
  )
}

export default Main

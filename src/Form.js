import React from 'react'
import xyz from "./form.css"
function Form() {
  return (
    <div className='form'>
      <div className='ChildForm'>
     <h1 className='fromH1'>Reuest Demo </h1>
      <p className='formP'>Digitize your restaurant with our ready-to-use online ordering system. </p>
      <input placeholder='Name' className='inputOne'/>
      <div className='inputTWoDiv'>
     
      <div className='inputTWo' >
     <input className='fourInput' placeholder='Rstourant Name'/>
     <input className='fourInput'  placeholder='Rstourant Address'/>
     </div>
     <div className='inputTWo1'>
     <input className='fourInput'  placeholder='Phone Number'/>
     <input className='fourInput'  placeholder='Email'/>

      </div>
      </div>
      <button className='submit'>Submit</button>
      </div>
      
    </div>
  )
}

export default Form

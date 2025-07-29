import React from 'react'

function Footer() {
  return (
    <div className=' container-fluid foot bg-dark text-white p-5 my-5'>
        <div className='footsec1'>
          <h2>Contact With Us</h2>
          <input type='text' className='finput form-control' placeholder='Enter Your Email' />
          <h2><i class="bi bi-youtube"></i><i class="bi bi-facebook"></i><i class="bi bi-instagram"></i><i class="bi bi-linkedin"></i><i class="bi bi-twitter"></i></h2>
          <p>© Copyright 2025 Croma. All rights reserved</p>
        </div>
        <div className='footsec2'>
         <h4>Useful Links About Croma</h4>
         <h4>Help and Support</h4>
         <h4>FAQ's</h4>
         <h4>Gift Card</h4>
         <h4>Croma E-Star</h4>
        </div>
        <div className='footsec3 '>
          <h4>Audio and Video</h4>
         <h4>Top Brands</h4>
         <h4>Phones & Wearables</h4>
         <h4>Health & Fitness</h4>
         <h4>Gamming</h4>
        </div>
    </div>
  )
}

export default Footer
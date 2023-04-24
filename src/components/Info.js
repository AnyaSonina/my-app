import React from 'react'
import Photo from '../images/me.jpg'

export default function MyInfo () {
   return (
    <>
       <div className='info-cols'>
       <img src = {Photo} alt="me smiling in glasses"/>
       </div>
       <div className='about-col'>
       <h3>Anna Korotkova</h3>
         <p className='about-p'>Frontend Developer</p>
         <small className='small'>annakor.website</small>
         <div class="flex__btns">
           <button className="mail"><i class="fa-solid fa-envelope"></i>Email</button>
           <button className="linkedin"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
       </div>
       </div>
      
    </>         
       
        
       
    
   ) 
    
}
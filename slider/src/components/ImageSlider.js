import React, { useState } from 'react';
import{FaArrowAltCircleRight,FaArrowAltCircleLeft} from 'react-icons/fa';
import { Imageapi } from './Imageapi';
import "../App.css";
const ImageSlider=()=>{
const[current,setCurrent]=useState(0);
    function handleRight(){
      
        setCurrent(current===Imageapi.length-1 ? 0:current+1)

    }

    function handleLeft(){
        setCurrent(current===0?Imageapi.length-1:current-1)
    }
    console.log(current);
  
    return(
        <section>
      <FaArrowAltCircleRight className='right-arrow' onClick={handleRight}/>
      <FaArrowAltCircleLeft className='left-arrow' onClick={handleLeft}/>
      {
        Imageapi.map((slide,index)=>{
            return( 
            <div className={index===current ? 'active':'non-active'} key={index}>
                {index===current && 
                 <img className='image' src={slide.image}/>
                }
         
                 </div>)
           
        })}
    </section>
    );
};

export default ImageSlider;
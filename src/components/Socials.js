import React from 'react';
import {socialData} from '../data';


const Socials = () => {
  return (<ul className='flex justify-center items-center gap-x-[30px]'>
    {socialData.map((item, index) => {
      return (
      
        
   
        <button  key={index}  onClick={(e) => {
        e.preventDefault();
        window.location.href=(item.href);
        }} 
      >
        {item.icon}
        </button>
      );
    })}
  </ul>
  );
};

export default Socials;
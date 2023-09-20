import React from 'react';
import {navData}from '../data';
import Socials from './Socials';


const NavMobile = () => {
  //destructure
  const{items} = navData;
  
  return (
  <nav className='w-full h-full flex flex-col
  justify-evenly overflow-hidden '>
    <ul className='flex justify-center items-center gap-x-[15px] pr-[25px]   '>
      {items.map((item, index) => {
        return (
        <li key={index} >
          <a className='link hover:border-b-2
        hover:border-dark transition duration-300'
         href={item.href}>{item.name}</a>
        </li>);
      
      })}

    </ul>
    <div className='text-2xl'>
        <Socials/>
    </div>
  </nav>
  );
};

export default NavMobile;

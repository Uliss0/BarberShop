import React from 'react';
import {footerData} from '../data';
import Socials from './Socials';
import {fadeIn} from '../variants';
import {motion} from 'framer-motion';




const Footer = () => {
  const {aboutCreator, links}= footerData;
  return (
  <footer className='bg-[#063431]'>
  
    <div className='container mx-auto'>
      {/*grid*/}
      <motion.div 
      variants={fadeIn('up')}
      initial= 'hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.1}}
      className='text-white flex flex-col lg:flex-row
        lg:justify-between gap-x-3 gap-y-14'>
        <div className='flex-1 flex flex-col gap-y-4'>
          {/*aboutCreator */}
          <div className='font-primary text-xl uppercase
            tracking-[0.07em]'>
              {aboutCreator.title}
            </div>
            <div className='leading-relaxed text-[#dbdbdb] text-sm'
            >{aboutCreator.subtitle}</div>
            {/* phone and email */}
            <div className='flex flex-col gap-y-4 font-semibold 
            text-[#dbdbdb] text-sm'>
              {/*phone*/}
              <div className='flex items-center gap-x-[8px] text-sm' >
                <div>{aboutCreator.phone.icon}</div>
                <div>{aboutCreator.phone.number}</div>
              </div>
              {/*email*/}
              <div className='flex items-center gap-x-[10px]'>
                <div>{aboutCreator.email.icon}</div>
                <div>{aboutCreator.email.address} </div>
              </div>
            </div>
        </div>

            {/*links */}
            <div className='flex-1 flex flex-col xl:items-center'>
              <div className='font-primary text-xl uppercase
              tracking-[0.08em] mb-3'>
                {links.title}</div>
              <ul className='flex flex-col gap-y-3 text-[#dbdbdb]'>
                {links.items.map((item,index)=>{
                  const{href,name} = item;
                    return <li key={index}>
                      <a href={href} className='hover:text-white'>
                        {name}
                      </a>
                    </li>
                }
                )}
              </ul>
            </div>
            <div className='flex-1 flex flex-col xl:items-center 
            justify-center'>
            <Socials className='hover:bg-red'/>
            </div>
      </motion.div>
    </div>
  </footer>
  );
};

export default Footer;

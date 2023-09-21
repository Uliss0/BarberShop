import React from 'react';
import {contactData} from '../data';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';


const Contact = () => {
const {title, info, program} = contactData;




  return  <section className=' section'>
    <div className='container mx-auto'>
      <div className='flex flex-col xl:flex-row gap-y-8 text-white'>
        {/*text */}
        <motion.div 
          variants={fadeIn('right')}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.4}}
        className='flex-1'>
          {/*title */}
          <h2 className=' h2 text-white max-w-[490px]'>{title}</h2>
          {/*info items */}
          <div className='flex  flex-col xl:flex-row gap-x-5 gap-y-16
          xl:gap-y-0'>
            {info.map((item,index)=>{
              const {title, subtitle, address, phone, email, link}=item;
              return ( 
                //item
              <div key={index} className=''>
                {/*title */}
                <div className='font-primary uppercase font-medium
                 text-xl mb-3'>
                  {title}</div>
                 {/*subtitle */}
                 <div className='mb-6 text-white leading-[187%]
                 tracking-[0.02em]'
                 >{subtitle}</div>
                 {/*address phone email*/}
                 <div className=' flex flex-col
                 gap-y-3 mb-8'>
                    {/*adress*/}
                    <div className='flex items-center gap[10px]'>
                    <div>{address.icon}</div>
                    <div className='font-medium'>
                      <a href='https://www.google.com/maps/place/SOUL+Peluquer%C3%ADa+Barber%C3%ADa/@-38.7311696,-62.2503888,16.25z/data=!4m14!1m7!3m6!1s0x95eda379a2cbf7a1:0xe03edb31944a4d18!2sSOUL+Peluquer%C3%ADa+Barber%C3%ADa!8m2!3d-38.7309796!4d-62.2470211!16s%2Fg%2F11p0cf316d!3m5!1s0x95eda379a2cbf7a1:0xe03edb31944a4d18!8m2!3d-38.7309796!4d-62.2470211!16s%2Fg%2F11p0cf316d?entry=ttu'
                      >{address.name}</a></div>
                  </div>
                  <div className='flex items-center gap[10px]'>
                    {/*phone*/}
                    <div>{phone.icon}</div>
                    <div className='font-medium'>{phone.number}</div>
                  </div>
                  <div className='flex items-center gap[10px]'>
                    {/*email*/}
                    <div>{email.icon}</div>
                    <div className='font-medium'>{email.address}</div>
                  </div>
                  {/*link*/}
                  <a className='font-medium border-b
                  border-white pb-[5px]' 
                  href='/'>{link}</a>
                 </div>
              </div>
              );
            })}
          </div>
        </motion.div>
        {/*program*/}
        <motion.div
          variants={fadeIn('left')}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.4}}
          className='flex-1'>
            <div className='flex-1'>
              <div><h2 className=' h2 text-white max-w-[350px]'>{program.title}</h2></div>
                <ul className='flex flex-col gap-y-4'>
                  {program.items.map((item,index)=>{
                    return <li key={index}>{item.name}</li>
                    })}
                </ul>
            </div>
           
        </motion.div>

      </div>
    </div>
  </section>
};

export default Contact;

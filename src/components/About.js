import React from 'react';
import { aboutData } from '../data';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


const About = () => {
const {title, subititle1, subtitle2, btnText, btnIcon}=
aboutData;


  return (
    <section className='lg:py-16 xl:pb-[160px] bg-[#191B1A]'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row gap-x-[70px]
        items-center'>
          {/*numbers*/ }
          <motion.div 
          variants={fadeIn('right')}
          initial='hidden'
          whileInView={'show'}
          viewport={{ once: false, amount:0.7 }}
           className='flex flex-col lg:flex-row flex-1'>
            <div className='text-[360px] xl:text-[680px]
            leading-none bg-no-repeat font-tertiary lg:-tracking-[0.055em]
            bg-about  bg-right bg-clip-text 
            text-transparent'>07</div>{/*bg-no-repeat*/}
          </motion.div>
          {/*text*/ }
          <motion.div
            variants={fadeIn('left')}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount:0.6 }}

          className='flex-1 h-full xl:mt-48'>
            <h2 className='h2 text-[#ABB5B1]' >{title}</h2>
            <div className='flex flex-col items-end'>
              <div className='max-w-[530px] text-[#ABB5B1]'>
                <p className='mb-6'>{subititle1}</p>
                <p className='mb-9'>{subtitle2}</p>
                <button 
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='https://api.whatsapp.com/message/AE4HOW7JMQEMG1?autoload=1&app_absent=0';
                  }} 
                
                className='btn btn-lg btn-link text-[#ABB5B1] hover:text-white'>
                  {btnText}<div className='text-xl text-[#ABB5B1] hover:text-white' >{btnIcon}</div>
                  </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>


  );
};

export default About;

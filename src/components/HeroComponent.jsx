import React from 'react'
import heroImage from '../assets/hero-image.png';
import SearchComponent from './SearchComponent';



function HeroComponent() {
  return (
    <div className='flex flex-col items-center justify-center py-[20px]'>
        <img src={heroImage} alt="hero-image" />

        <h2 className='text-[80px] font-semibold dark:text-white '>Store</h2>
        <p className='text-[20px] dark:text-white/60 lg:w-[50%] text-center mb-[20px]'>Sprinkle a little magic on your day. Connect your tools,
        and take your daily workflow to the next level.</p>

        {/* search */}
        <SearchComponent />
    </div>
  )
}

export default HeroComponent
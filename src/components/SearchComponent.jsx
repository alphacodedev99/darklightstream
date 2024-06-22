import React from 'react'
import control from '../assets/control-icon.png';
import kIcon from '../assets/k-icon.png';


function SearchComponent({size}) {
  return (
    <div className='border border-darkMainBG/30 rounded-lg flex items-center pr-[10px] dark:border-white/30'>
            <input style={{width: size}} type="text" placeholder='Search..' className='bg-transparent p-[10px] outline-none dark:text-whiteText/70' />
            <div className='flex items-center gap-[5px]'>
                <img src={control} alt="" className='bg-darkMainBG/50 rounded-md' />
                <img src={kIcon} alt="" className='bg-darkMainBG/50 rounded-md'/>
            </div>
    </div>
  )
}

export default SearchComponent
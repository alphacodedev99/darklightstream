import React from 'react'
import SearchComponent from './SearchComponent'
import { cardExtension } from '../data/cardFeatured'
import CardExtensionComponent from './CardExtensionComponent'

function ExtensionsComponent() {
  return (
    <div className='py-[100px]'>
        <div className='flex items-center justify-between'>
            <div className='flex gap-[15px]'>
                <button className='px-[16px] py-[8px] dark:text-whiteText/80 dark:bg-whiteText/20 rounded-full bg-darkMainBG/10'>All Extensions</button>
                <button className='px-[16px] py-[8px] dark:text-whiteText/80 rounded-full '>Recently Added</button>
            </div>

            <SearchComponent size={280}/>
        </div>

        {/* text */}
        <div className='mt-[50px]'>
            <h3 className='text-[20px] font-medium dark:text-whiteText/80'>Extensions</h3>
            <p className='dark:text-whiteText/40'>Explore the library and discover the incredible work of our community</p>
        </div>

        {/* allCards */}
        <div className='grid grid-cols-2 gap-[15px] mt-[30px]'>
            {cardExtension.map((el, index) => {
                return <CardExtensionComponent key={index} card={el} />
            })}
        </div>
    </div>
  )
}

export default ExtensionsComponent
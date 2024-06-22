import React from 'react'
import {cardFeatured} from '../data/cardFeatured';
import CardFeaturedComponent from './CardFeaturedComponent';


function ExploreComponent() {
  return (
    <div className='mt-[100px]'>
        <h2 className='dark:text-whiteText text-center text-[40px] font-medium'>Explore</h2>
        <p className='dark:text-whiteText/50 text-center'>Browse and install extensions built by the community</p>

        <div className='mt-[50px] py-[40px]'>
            <h4 className='dark:text-whiteText'>Featured</h4>
            <p className='dark:text-whiteText/50'>Our top picks to get you started</p>

            <div className='flex items-center justify-between mt-[30px]'>
                {cardFeatured.map((card,index) => {
                    return <CardFeaturedComponent key={index} card={card} />
                })}
            </div>
        </div>
    </div>
  )
}

export default ExploreComponent
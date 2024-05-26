import React from 'react'

const HomeSectionCard = ({product}) => {
  return (
    <div 

    className='cursor-pointer flex flex-col hover:scale-[106%]  transit duration-300 items-center bg-white  rounded-lg shadow-lg w-[15rem] mx-2'>
        <div className='h-[13rem] w-[10rem]'>
            <img className='object-cover object-top w-full h-full'
            src={product.image} alt="" />
        </div>
        <div>
            <h3 className='text-lg font-medium text-gray-900'>{product.brand}</h3>
            <p className='mt-2 text-sm text-gray-500'>{product.title}</p>
        </div>

    </div>
  )
}

export default HomeSectionCard
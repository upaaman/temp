import { AddCircleOutline, RemoveCircleOutline } from '@mui/icons-material'
import { Button, IconButton } from '@mui/material'
import React from 'react'

const CartItem = () => {
    return (
        <div className='p-5 shadow-lg border rounded-md'>
            <div className='flex items-center'>
                <div className='h-[5rem] w-[5rem] lg:w-[9rem] lg:h-[9rem]'>
                    <img
                        className='w-full h-full object-cover object-top'
                        src="https://rukminim1.flixcart.com/image/612/612/xif0q/ethnic-set/2/l/r/l-6909-blue-libas-original-imafygzxftqzszfx-bb.jpeg?q=70" alt='' />
                </div>
                <div className='ml-5 space-y-2'>
                    <p className='font-semibold'>Men Slim Fit Mid Rise Jeans</p>
                    <p className='opacity-50'>Size:M, White</p>
                    <p className='opacity-50'>Seller: Mr Sharma</p>

                    <div className='flex space-x-4 item-center  text-gray-900'>
                        <p className='font-semibold'>₹199 </p>
                        <p className='opacity-50 line-through'> ₹300 </p>
                        <p className='text-green-600 font-semibold'>10% Off</p>
                    </div>

                </div>
            </div>
            <div className='lg:flex items-center lg:space-x-10 pt-4'>
                <div className='flex items-center space-x-2'>
                    <IconButton>
                        <RemoveCircleOutline  sx={{color:"RGB(145,85,253)"}}/>
                    </IconButton>
                    <span className='py-1 px-7 '>2</span>
                    <IconButton>
                    <AddCircleOutline  sx={{color:"RGB(145,85,253)"}}/>
                    </IconButton>

                </div>
                <div>
                    <Button sx={{color:"RGB(145,85,253)"}}>remove</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
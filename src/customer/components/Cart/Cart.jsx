import React from 'react'
import CartItem from './CartItem'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const navigate = useNavigate();
    const handleCheckout = () => {
        navigate("/checkout?step=2")
    }
    return (
        <div>
            <div className='lg:grid grid-cols-3 relative lg:px-16'>
                <div className='col-span-2 space-y-5'>
                    {[1, 1, 1, 1, 1].map((item) =>
                        <CartItem />
                    )}
                </div>
                <div className=' px-5 sticky top-0 h-[45vh] mx-5 p-5 rounded-lg mt-5 lg:mt-0 border '>
                    <div className=''>
                        <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                        <hr />
                    </div>
                    <div className='space-y-3 mb-10'>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span className='text-green-600'>$1212</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Discount</span>
                            <span className='text-green-600'>-  $121</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Delivery Charges</span>
                            <span className='text-green-600'>Free</span>
                        </div>
                        <div className='flex justify-between pt-3 text-black '>
                            <span className='font-bold'>Total</span>
                            <span className='text-green-600 font-bold'>$1100</span>
                        </div>
                    </div>
                    <Button variant='contained'
                        className='w-full'
                        onClick={() => handleCheckout()}
                        sx={{ px: "2.5rem", py: "0.8rem", bgcolor: "#9155fd" }}>
                        Checkout
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default Cart
import { Grid } from '@mui/material'
import React from 'react'
import AdjustIcon from '@mui/icons-material/Adjust';

const OrderCard = () => {
    return (
        <div className='p-5 shadow-sm hover:shadow-lg border'>
            <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
                <Grid item xs={6}>

                    <div className='flex cursor-pointer'>
                        <img
                            className='h-[6rem] w-[6rem] object-cover object-top'
                            src="https://images.pexels.com/photos/23483902/pexels-photo-23483902/free-photo-of-a-woman-in-a-white-shirt-and-brown-boots-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />

                        <div className='ml-5 space-y-2'>

                            <p className=''>Men Slim Mid Rise Black Jeans</p>
                            <p className='opacity-50 text-xs font-semibold'>Size: M</p>

                            <p className='opacity-50 text-xs font-semibold'>Color: Black</p>

                        </div>
                    </div>

                </Grid>
                <Grid item xs={2}>
                    <p>$199</p>
                </Grid>

                <Grid item xs={4}>
                    {true &&
                        <div>
                            <p>
                                <AdjustIcon
                                sx={{width:"15px",height:"15px"}}
                                className='text-green-600 mr-2 text-sm'
                                />
                                <span>Delivered On March 03</span>
                            </p>
                            <p className='text-xs'>Your Item has Been Delivered</p>
                        </div>}
                        {
                            false&&
                            <p>
                                <span>Expected Delivery on Mar 03</span>
                            </p>

                        }
                </Grid>
            </Grid>
        </div >
    )
}

export default OrderCard
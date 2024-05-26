import React from 'react'
import AddressCard from '../AddressCard/AddressCard'
import OrderTracker from './OrderTracker'
import { Box, Grid } from '@mui/material'
import { deepPurple } from '@mui/material/colors'
import StarBorderIcon from '@mui/icons-material/StarBorder';
const OrderDetails = () => {
    return (
        <div className='px-5 lg:px-20'>
            <div>
                <h1 className='font-bold text-xl py-7'>Delivery Address</h1>
                <AddressCard />
            </div>
            <div className='py-20'>
                <OrderTracker activeStep={4} />
            </div>
            <Grid className=' p-3 justify-center space-y-6 ' container>
                {[1, 1, 1, 1, 1, 1].map((item) =>
                    <Grid item container className='shadow-md hover:shadow-xl rounded-md p-5  border '
                        sx={{ alignItems: "center", justifyContent: "space-between" }}>
                        <Grid item xs={6}  >
                            <div className='flex items-center space-x-3'>
                                <img
                                    className='w-[7rem] h-[7rem] object-cover object-top'
                                    src="https://images.pexels.com/photos/24244074/pexels-photo-24244074/free-photo-of-processed-with-vsco-with-av8-preset.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="" />
                                <div className='space-y-1 ml-5 '>
                                    <p className='font-semibold ' >Men Slim Fit Jeans</p>
                                    <p className='space-x-7 font-semibold text-xs opacity-60'>
                                        <span>Color: Pink</span>
                                        <span>Size: M</span>
                                    </p>
                                    <p>Seller : Jack and Jones</p>
                                    <p>$199</p>

                                </div>
                            </div>
                        </Grid>

                        <Grid item >
                            <Box sx={{ color: deepPurple[500] }}>
                                <StarBorderIcon
                                    sx={{ fontSize: "2.5rem" }}
                                    className='px-2' />
                                <span>Rate & Review Product</span>
                            </Box>
                        </Grid>

                    </Grid>
                )}
            </Grid>

        </div>)
}

export default OrderDetails
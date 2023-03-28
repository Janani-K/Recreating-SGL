import React from 'react'
import { Stack, Typography, Link } from '@mui/material'

const Footer = () => {
    return (
        <Stack
            direction='row'
            spacing={1}
            alignItems='center'
        // paddingBottom='15px'
        >
            <Typography variant='body2' sx={{ color: '#888' }}>&#169; 2023 </Typography>
            <Link underline="none" href="https://sglsystem.com/" variant='body2' sx={{ color: '#ddd' }}>Stadium Grow Lighting B.V.</Link>
            <Typography variant='body2' sx={{ color: '#888' }} fontSize='10px'>Version 4.1</Typography>
        </Stack>
    )
}

export default Footer
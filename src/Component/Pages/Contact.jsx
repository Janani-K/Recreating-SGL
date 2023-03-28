import { Avatar, Box, Grid, IconButton, Link, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Contact = () => {
    return (
        // <Grid container spacing={3} direction='column' alignItems={'center'}>
        //     <Grid item >
        //         <Typography variant='h5'>Contact</Typography>
        //         <Typography variant='h6'>Get in touch</Typography>
        //     </Grid>
        //     <Grid item>
        //         <Typography variant='h6'>Your primary agronomical support contact</Typography>
        //         <Typography variant='subtitle2'>markw</Typography>
        //         <Typography><Link color={"warning"} underline='none' href='mailto:m.wubben@sglsystem.com'>m.wubben@sglsystem.com</Link></Typography>
        //     </Grid>
        //     <Grid item>
        //         <Grid container spacing={3}>
        //             <Grid item>
        //                 <Stack spacing={2} sx={{ alignItems: 'center', }}>
        //                     <Typography variant='h6'>SGL</Typography>
        //                     <Stack sx={{ alignItems: 'center', }}>
        //                         <Typography>+31 795933801</Typography>
        //                         <Typography><Link color={"warning"} underline='none' href='mailto:info@sglsystem.com'>info@sglsystem.com</Link></Typography>
        //                         <Typography>Abr. Kroesweg 44 2742KX Waddinxveen The Netherlands</Typography>
        //                     </Stack>
        //                     <Box>
        //                         <Stack direction='row' spacing={1}>
        //                             <IconButton><FacebookIcon /></IconButton>
        //                             <IconButton><TwitterIcon /></IconButton>
        //                             <IconButton><YouTubeIcon /></IconButton>
        //                             <IconButton><LinkedInIcon /></IconButton>
        //                             <IconButton><InstagramIcon /></IconButton>
        //                         </Stack>
        //                     </Box>
        //                     <Box>
        //                         <Typography>Service: <Link color={"warning"} underline='none' href='mailto:service@sglsystem.com'>service@sglsystem.com</Link></Typography>
        //                         <Typography>Agronomy: <Link color={'warning'} underline='none' href='mailto:assist@sglsystem.com'>assist@sglsystem.com</Link></Typography>
        //                         <Typography>HR: <Link color={'warning'} underline='none' href='mailto:jobs@sglsystem.com'>jobs@sglsystem.com</Link></Typography>
        //                         <Typography>Finance: <Link color={'warning'} underline='none' href='mailto:finance@sglsystem.com'>finance@sglsystem.com</Link></Typography>
        //                     </Box>
        //                 </Stack>
        //             </Grid>
        //             <Grid item>
        //                 <Stack spacing={3} sx={{ alignItems: 'center', }}>
        //                     <Typography variant='h6'>SGL Inc.</Typography>
        //                     <Stack sx={{ alignItems: 'center', }}>
        //                         <Typography>+1 855-346-9403</Typography>
        //                         <Typography><Link color={"warning"} underline='none' href='mailto:info@sglsystem.com'>info@sglsystem.com</Link></Typography>
        //                         <Typography>108 Main Avenue SW Suite 500, Warren, OH 44481, United States</Typography>
        //                     </Stack>
        //                     <Box>
        //                         <Stack direction='row' spacing={1}>
        //                             <Avatar><FacebookIcon /></Avatar>
        //                             <Avatar><TwitterIcon /></Avatar>
        //                             <Avatar><YouTubeIcon /></Avatar>
        //                             <Avatar><LinkedInIcon /></Avatar>
        //                             <Avatar><InstagramIcon /></Avatar>
        //                         </Stack>
        //                     </Box>
        //                     <Box>
        //                         <Typography>Service: <Link color={"warning"} underline='none' href='mailto:service@sglsystem.com'>service@sglsystem.com</Link></Typography>
        //                         <Typography>Agronomy: <Link color={'warning'} underline='none' href='mailto:assist@sglsystem.com'>assist@sglsystem.com</Link></Typography>
        //                         <Typography>HR: <Link color={'warning'} underline='none' href='mailto:jobs@sglsystem.com'>jobs@sglsystem.com</Link></Typography>
        //                         <Typography>Finance: <Link color={'warning'} underline='none' href='mailto:finance@sglsystem.com'>finance@sglsystem.com</Link></Typography>
        //                     </Box>
        //                 </Stack>
        //             </Grid>
        //         </Grid>
        //     </Grid>
        // </Grid >

        <Stack spacing={7}>
            <Box textAlign={'center'}>
                <Typography variant='h4' >Contact</Typography>
                <Typography variant='h6'>Get in touch</Typography>
            </Box>
            <Box textAlign={'center'}>
                <Typography variant='h5'>Your primary agronomical support contact</Typography>
                <Typography variant='subtitle1'>markw</Typography>
                <Link href='mailto:m.wubben@sglsystem.com' variant='body2' underline='none' color='#f38820' >m.wubben@sglsystem.com</Link>
            </Box>
            <Stack direction={'row'} spacing={3}>
                <Stack spacing={1} alignItems='center'>
                    <Typography variant='h5'>SGL</Typography>
                    <Stack alignItems='center'>
                        <Typography variant='body2'>+31 795933801</Typography>
                        <Link href='mailto:info@sglsystem.com' variant='body2' underline='none' color='#f38820'>info@sglsystem.com</Link>
                        <Typography variant='body2'>Abr. Kroesweg 44 2742KX Waddinxveen The Netherlands</Typography>
                    </Stack>
                    <Stack direction='row' spacing={1}>
                        <IconButton href='https://www.facebook.com/SGLsystem/'><FacebookIcon /></IconButton>
                        <IconButton href='https://twitter.com/SGLsystem' ><TwitterIcon /></IconButton>
                        <IconButton href='https://www.youtube.com/user/StadiumGrowLighting' ><YouTubeIcon /></IconButton>
                        <IconButton href='https://www.linkedin.com/company/sglsystem/' ><LinkedInIcon /></IconButton>
                        <IconButton href='https://www.instagram.com/sglsystem/' ><InstagramIcon /></IconButton>
                    </Stack>
                    <Stack alignItems='center'>
                        <Typography variant='subtitle2'>Service: <Link href='mailto:service@sglsystem.com' variant='body2' underline='none' color='#f38820'>service@sglsystem.com</Link></Typography>
                        <Typography variant='subtitle2'>Agronomy: <Link href='mailto:assist@sglsystem.com' variant='body2' underline='none' color='#f38820'>assist@sglsystem.com</Link></Typography>
                        <Typography variant='subtitle2'>HR: <Link href='mailto:jobs@sglsystem.com' variant='body2' underline='none' color='#f38820'>jobs@sglsystem.com</Link></Typography>
                        <Typography variant='subtitle2'>Finance: <Link href='mailto:finance@sglsystem.com' variant='body2' underline='none' color='#f38820'>finance@sglsystem.com</Link></Typography>
                    </Stack>
                </Stack>
                <Stack spacing={1} alignItems='center'>
                    <Typography variant='h5'>SGL Inc.</Typography>
                    <Stack alignItems='center'>
                        <Typography variant='body2'>+1 855-346-9403</Typography>
                        <Link href='mailto:info@sglsystem.com' variant='body2' underline='none' color='#f38820'>info@sglsystem.com</Link>
                        <Typography variant='body2'>108 Main Avenue SW Suite 500, Warren, OH 44481, United States</Typography>
                    </Stack>
                    <Stack direction='row' spacing={1}>
                        <IconButton href='https://www.facebook.com/SGLsystem/'><FacebookIcon /></IconButton>
                        <IconButton href='https://twitter.com/SGLsystem' ><TwitterIcon /></IconButton>
                        <IconButton href='https://www.youtube.com/user/StadiumGrowLighting' ><YouTubeIcon /></IconButton>
                        <IconButton href='https://www.linkedin.com/company/sglsystem/' ><LinkedInIcon /></IconButton>
                        <IconButton href='https://www.instagram.com/sglsystem/' ><InstagramIcon /></IconButton>
                    </Stack>
                    <Stack alignItems='center'>
                        <Typography variant='subtitle2'>Service: <Link href='mailto:service@sglsystem.com' variant='body2' underline='none' color='#f38820'>service@sglsystem.com</Link></Typography>
                        <Typography variant='subtitle2'>Agronomy: <Link href='mailto:assist@sglsystem.com' variant='body2' underline='none' color='#f38820'>assist@sglsystem.com</Link></Typography>
                        <Typography variant='subtitle2'>HR: <Link href='mailto:jobs@sglsystem.com' variant='body2' underline='none' color='#f38820'>jobs@sglsystem.com</Link></Typography>
                        <Typography variant='subtitle2'>Finance: <Link href='mailto:finance@sglsystem.com' variant='body2' underline='none' color='#f38820'>finance@sglsystem.com</Link></Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack >
    )
}

export default Contact
import { ExpandLess } from '@mui/icons-material'
import { Fab, Tooltip, Zoom } from '@mui/material'
import React, { useEffect, useState } from 'react'

const BackToTop = () => {

    const [isVisible, setIsVisible] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 250) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        window.addEventListener(`scroll`, handleScroll)

        return () => window.removeEventListener(`scroll`, handleScroll)
    }, [])


    return (
        <Zoom in={isVisible}>
            {/* <Tooltip title='Scroll to top' placement='top' disableInteractive> */}
            <Fab color='warning' aria-label='back-to-top' size='small' onClick={handleClick}>
                <ExpandLess />
            </Fab>
            {/* </Tooltip> */}
        </Zoom>

    )
}

export default BackToTop
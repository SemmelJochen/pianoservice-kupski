import React from 'react'
import { Typography } from '@material-ui/core'

export default function About(props) {
    return (
        <div {...props} style={{ height: `calc(${window.innerHeight}px - 42px)`, width: "100%", backgroundColor: "white" }}>
            <Typography>
                About
            </Typography>
        </div>
    )
}

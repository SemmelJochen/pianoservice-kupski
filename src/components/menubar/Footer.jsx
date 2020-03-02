import React from 'react'
import { makeStyles, AppBar, Typography, Link, MenuItem } from '@material-ui/core'

const useStyles = makeStyles({
    container: {
        width: "100%",
        height: "150px",
        position: "relative",
        bottom: "0px",
        top: "100%",
        display: "flex",
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: "row"

    }
});
export default function Footer(props) {
    const classes = useStyles(props);
    return (
        <AppBar {...props} className={classes.container}>
            <div style={{
                flex: 1,
                height: "inherit",
                width: '50%',
                padding: "30px",

            }} >
                <Typography style={{ fontWeight: 600 }}>
                    Pianoservice Kupski
                    </Typography>
                <Typography>
                    Bergkämpe 6
                    </Typography>
                <Typography>
                    32312 Lübbecke
                    </Typography>
                <Typography>
                    01704700820
                    </Typography>
            </div>
            <div style={{
                flex: 1,
                height: "inherit",
                width: '50%',
                padding: "30px",
            }} >

                <Link onClick={() => window.location.href = "/impressum"} component={MenuItem} color="inherit">
                    Impressum
                    </Link>
                <Link component={MenuItem} color="inherit">
                    Datenschutz
                    </Link>

            </div>
        </AppBar>
    )
}


import React from 'react'
import { ParallaxBanner, withController } from 'react-scroll-parallax'
import { Typography, IconButton, withTheme, Fade, Zoom } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import bg from '../../ressources/img/bg.jpg'
import { Link } from 'react-scroll'


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blurValue: 0,
        }
    };

    componentDidMount() {
        window.addEventListener('scroll', () => this.handleScroll());
    }

    handleScroll() {
        //        if (window.scrollY % 5 === 0)
        //this.setState({ blurValue: window.scrollY * 0.02 })
    }
    handleLoad() {
        this.props.parallaxController.update();
    }
    render() {
        return (
            <div id={this.props.id}>
                <div style={{
                    flex: 1,
                    height: window.innerHeight,
                    justifyContent: 'center',
                    alignItems: 'center',
                    alignContent: 'center',
                    display: 'flex',
                    flexDirection: "row",
                }}>
                    <ParallaxBanner
                        onLoad={() => this.handleLoad()}
                        layers={[
                            {
                                children: <div
                                    style={{
                                        backgroundImage: `url(${bg})`,
                                        backgroundSize: "auto 100%",
                                        backgroundPosition: "center center",
                                        backgroundRepeat: "no-repeat",
                                        width: "100%",
                                        height: "100%",
                                        filter: `blur(${this.state.blurValue}px`
                                    }} />,
                                amount: 0.2,

                            },

                            {
                                children: (
                                    <div style={{
                                        marginTop: "15%",
                                        marginLeft: "15%",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "80%",
                                    }}>
                                        <Fade in timeout={{ enter: 2000 }}>
                                            <Typography variant="h1"
                                                style={{
                                                    fontWeight: 500,
                                                    color: this.props.theme.palette.primary.contrastText
                                                }}>
                                                Pianoservice Kupski
                                                </Typography>
                                        </Fade>
                                        <Fade in timeout={{ enter: 4000 }}>
                                            <Typography variant="h4"
                                                style={{
                                                    fontWeight: 500,
                                                    color: this.props.theme.palette.primary.contrastText
                                                }}>
                                                Ihre Ohren werden Augen machen
                                                </Typography>
                                        </Fade>
                                    </div>),
                                amount: 0.6,
                                expanded: false,
                            },
                            {
                                children: (
                                    <div style={{
                                        display: 'flex',
                                        width: "100%",
                                        height: '100%',
                                        alignItems: 'flex-end',
                                        justifyContent: 'center'
                                    }}>
                                        <Zoom in timeout={{ enter: 800 }}>
                                            <IconButton size="medium">
                                                <Link
                                                    activeClass="active"
                                                    to="about"
                                                    spy={true}
                                                    smooth={true}
                                                    offset={-42}
                                                    duration={800}
                                                >
                                                    <ExpandMoreIcon fontSize="large" style={{ color: "white" }} />
                                                </Link>
                                            </IconButton>
                                        </Zoom>
                                    </div>),
                                amount: 0,
                                expanded: false
                            }
                        ]}
                        style={{
                            height: 'inherit',
                        }}
                        expanded={false}
                    />
                </div>
            </div>
        )
    }
}

export default withTheme(withController(Home));

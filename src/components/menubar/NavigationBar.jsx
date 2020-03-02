import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ButtonBar from './ButtonBar';
import { ClickAwayListener, Button, Drawer, Typography, Fade } from '@material-ui/core';

const styles = theme => ({
    menuBar: {
        position: "static",
        paddingBottom: theme.spacing(1),
        paddingTop: theme.spacing(1),
    },
    buttonToolbar: {
        alignItems: 'flex-start',
        paddingTop: theme.spacing(0.5),
        paddingBottom: theme.spacing(0.5),
    },

    container: {
        direction: "row",
        justify: "center",
        alignItems: "center",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
});

class NavigationBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fixed: false,
            drawerOpen: false,
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => this.update())
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', () => this.update());
    }

    update() {
        if (window.scrollY > window.innerHeight) {
            this.setState({ fixed: true })
        } else {
            if (this.state.fixed === true) {

                this.setState({ fixed: false })
            }
        }
    }
    toggleDrawer = (open) => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        this.setState({ drawerOpen: open });
    }

    render() {
        if (this.props.mobile) {
            return (
                <>
                    <div style={{
                        flexGrow: 1,
                        position: this.state.fixed ? "fixed" : "relative",
                        top: 0,
                        zIndex: 2,
                        width: "100%",
                        backgroundColor: "#ffffff",
                        minHeight: "42px",
                        display: "flex",
                        alignContent: "center"
                    }}>
                        <ClickAwayListener onClickAway={this.toggleDrawer(false)}>
                            <Button aria-controls="mobile-view-menu" aria-haspopup="true" onClick={this.toggleDrawer(true)}>
                                <Typography variant="button"> Menu</Typography>
                            </Button>
                        </ClickAwayListener>
                        <Drawer id="mobile-view-menu" anchor="left" open={this.state.drawerOpen} >
                            <Fade>
                                <ButtonBar flexDirection="column"/>
                            </Fade>
                        </Drawer>


                    </div>
                    {this.state.fixed && <div style={{ height: "42px" }} />}
                </>
            )
        } else {
            return (
                <>
                    <div id={this.props.id} style={{
                        flexGrow: 1,
                        position: this.state.fixed ? "fixed" : "relative",
                        top: 0,
                        zIndex: 2,
                        width: "100%",
                        backgroundColor: "#ffffff",
                        maxHeight: "42px"
                    }}>
                        <ButtonBar flexDirection="row"/>

                    </div>
                    {this.state.fixed && <div style={{ height: "42px" }} />}
                </>
            )
        }
    }

}

NavigationBar.propTypes = {
    classes: PropTypes.object.isRequired,
    mobile: PropTypes.bool.isRequired
};

export default withStyles(styles)(NavigationBar);


/* <AppBar className={classes.menuBar} color={"primary"}>
                        <Toolbar>
                            <img
                                className={classes.menuButton}
                                src={Logo}
                                alt="pianoservice-logo"
                                width="350px" height="auto"
                            />
                            <Typography variant="h6" className={classes.title}>
                            </Typography>

                            <img
                                src={Spruch}
                                alt="spruch"
                                width="250px" height="auto"
                            />
                        </Toolbar>
                    </AppBar>*/
import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import NoSsr from '@material-ui/core/NoSsr';
import { withStyles, withTheme, MenuItem } from '@material-ui/core';
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-scroll'
import PropTypes from 'prop-types';

const styles = theme => ({
    container: {
        justify: 'space-between',
        display: 'flex',
    },
    item: {
        paddingLeft: "16px",
        paddingRight: "16px",
        paddingTop: "9px",
        paddingBottom: "9px"
    },
    menuItem: {
        padding: 0
    }
});

class ButtonBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tabs: {
                home: {
                    name: "Home",
                    color: props.theme.palette.primary.main,
                    path: "/",
                    svg: (color) => {
                        return (
                            <svg
                                width="24px"
                                height="24px"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill={color}
                                    d="M12 5.69L17 10.19V18H15V12H9V18H7V10.19L12 5.69M12 3L2 12H5V20H11V14H13V20H19V12H22L12 3Z"
                                />
                            </svg>
                        )
                    }
                },
                about: {
                    name: "Über mich",
                    color: props.theme.palette.primary.main,
                    path: "/about",
                },
                references: {
                    name: "Referenzen",
                    color: props.theme.palette.primary.main,
                    path: "/references",
                },
                services: {
                    name: "Leistungen",
                    color: props.theme.palette.primary.main,
                    path: "/services",
                },
                places: {
                    name: "Klaviere an besonderen Orten",
                    color: props.theme.palette.primary.main,
                    path: "/special_places",
                },
                contact: {
                    name: "Kontakt",
                    color: props.theme.palette.primary.main,
                    path: "/contact",
                }
            },
            flexDirection: props.flexDirection
        }
        this.theme = props.theme;

    }
    menuItems = () => {
        const { classes } = this.props;
        return (
            <>
                <MenuItem className={classes.menuItem}>
                    <Link
                        className={classes.item}
                        activeClass="active"
                        to="home"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        component={Button}
                        color={this.state.tabs.services.color}
                        onMouseOver={() => {
                            let tabs = this.state.tabs;
                            tabs.home.color = this.theme.palette.secondary.main;
                            this.setState({ tabs: tabs });
                        }}
                        onMouseLeave={() => {
                            let tabs = this.state.tabs;
                            tabs.home.color = this.theme.palette.primary.main;
                            this.setState({ tabs: tabs });
                        }}
                    >
                        {this.state.tabs.home.svg(this.state.tabs.home.color)}
                    </Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <Link
                        className={classes.item}
                        activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-42}
                        duration={800}
                        style={{
                            textTransform: "none",
                            color: this.state.tabs.about.color,
                        }}
                        onMouseOver={() => {
                            let tabs = this.state.tabs;
                            tabs.about.color = this.theme.palette.secondary.main;
                            this.setState({ tabs: tabs });
                        }}
                        onMouseLeave={() => {
                            let tabs = this.state.tabs;
                            tabs.about.color = this.theme.palette.primary.main;
                            this.setState({ tabs: tabs });
                        }}
                    >
                        {this.state.tabs.about.name}
                    </Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <Link
                        className={classes.item}
                        activeClass="active"
                        to="references"
                        spy={true}
                        smooth={true}
                        offset={-42}
                        duration={800}
                        style={{
                            textTransform: "none",
                            color: this.state.tabs.references.color,
                        }}
                        onMouseOver={() => {
                            let tabs = this.state.tabs;
                            tabs.references.color = this.theme.palette.secondary.main;
                            this.setState({ tabs: tabs });
                        }}
                        onMouseLeave={() => {
                            let tabs = this.state.tabs;
                            tabs.references.color = this.theme.palette.primary.main;
                            this.setState({ tabs: tabs });
                        }}
                    >
                        {this.state.tabs.references.name}
                    </Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <Link
                        className={classes.item}
                        activeClass="active"
                        to="services"
                        spy={true}
                        smooth={true}
                        offset={-42}
                        duration={800}
                        style={{ textTransform: "none", color: this.state.tabs.services.color }}
                        onMouseOver={() => {
                            let tabs = this.state.tabs;
                            tabs.services.color = this.theme.palette.secondary.main;
                            this.setState({ tabs: tabs });
                        }}
                        onMouseLeave={() => {
                            let tabs = this.state.tabs;
                            tabs.services.color = this.theme.palette.primary.main;
                            this.setState({ tabs: tabs });
                        }}
                    >
                        {this.state.tabs.services.name}
                    </Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <Link
                        className={classes.item}
                        activeClass="active"
                        to="specialPlaces"
                        spy={true}
                        smooth={true}
                        offset={-42}
                        duration={800}
                        style={{ textTransform: "none", color: this.state.tabs.places.color }}
                        onMouseOver={() => {
                            let tabs = this.state.tabs;
                            tabs.places.color = this.theme.palette.secondary.main;
                            this.setState({ tabs: tabs });
                        }}
                        onMouseLeave={() => {
                            let tabs = this.state.tabs;
                            tabs.places.color = this.theme.palette.primary.main;
                            this.setState({ tabs: tabs });
                        }}
                    >
                        {this.state.tabs.places.name}
                    </Link>
                </MenuItem>
                <MenuItem className={classes.menuItem}>
                    <Link
                        className={classes.item}
                        activeClass="active"
                        to="contact"
                        spy={true}
                        smooth={true}
                        offset={-42}
                        duration={800}
                        style={{ textTransform: "none", color: this.state.tabs.contact.color }}
                        onMouseOver={() => {
                            let tabs = this.state.tabs;
                            tabs.contact.color = this.theme.palette.secondary.main;
                            this.setState({ tabs: tabs });
                        }}
                        onMouseLeave={() => {
                            let tabs = this.state.tabs;
                            tabs.contact.color = this.theme.palette.primary.main;
                            this.setState({ tabs: tabs });
                        }}
                    >
                        {this.state.tabs.contact.name}
                    </Link>
                </MenuItem >
            </>
        )
    }
    render() {
        const { classes } = this.props;
        if (this.state.flexDirection === "column") {
            return (
                <NoSsr>
                    <Router>
                        <Grid className={classes.container} style={{ flexDirection: this.state.flexDirection }}>
                            <this.menuItems />
                        </Grid>
                    </Router>
                </NoSsr >
            );
        }else {
            return (
                <NoSsr>
                    <Router>
                        <Grid className={classes.container} style={{ flexDirection: this.state.flexDirection, maxHeight: "42px" }}>
                            <this.menuItems />
                        </Grid>
                    </Router>
                </NoSsr >
            );
        }
    }
}

ButtonBar.propTypes = {
    flexDirection: PropTypes.string.isRequired,
};

export default withTheme(withStyles(styles)(ButtonBar));
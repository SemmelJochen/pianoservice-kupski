import React from 'react';
import NavigationBar from './components/menubar/NavigationBar'
import { createMuiTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NoMatch from "./components/sites/NoMatch";
import Home from "./components/sites/Home"
import { CssBaseline, Typography } from '@material-ui/core';
import { ParallaxProvider } from 'react-scroll-parallax';
import About from './components/sites/About';
import Services from './components/sites/Services';
import SpecialPlaces from './components/sites/SpecialPlaces';
import Contact from './components/sites/Contact';
import Footer from './components/menubar/Footer';
import Impressum from './components/sites/Impressum'
import References from './components/sites/References';
import { animateScroll as scroll } from 'react-scroll'
import bg from './ressources/img/bg.jpg'
import logo from './ressources/img/logo-font.png'

const theme = responsiveFontSizes(createMuiTheme({
  palette: {
    primary: {
      main: '#424242',
      dark: '#1b1b1b',
      light: '#6d6d6d',
      contrastText: '#ffffff',
    },
    secondary: {
      light: '#ff5f52',
      main: '#c62828',
      dark: '#8e0000',
      contrastText: '#ffffff',
    },
    background: {
      default: "#ffffff"
    }
    // error: will use the default color
  },
  typography: {
    fontFamily: [
      'Big John PRO',
      "Quicksand",
      "AppleSDGothicNeo-Light",
      "Avenir-Light",
      "Helvetica",
      "Verdana",
      "Roboto"
    ].join(','),
  },

}));




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initializing: true,
      width: undefined,
      mobileView: false,
    }
  }

  updateWidth = () => {
    const width = window.innerWidth
    var mobileView = false;
    if (width < 850) {
      mobileView = true;
    }
    this.setState({
      width: width,
      mobileView: mobileView
    });
  }

  handleKeyStroke = (event) => {
    var height = window.innerHeight
    if (event.key === "ArrowDown") {
      scroll.scrollMore(height)
    }
    if (event.key === "ArrowUp") {
      scroll.scrollMore(-height)
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', (event) => this.handleKeyStroke(event))
    window.addEventListener('resize', () => this.updateWidth());
    this.setState({
      initializing: false,
      width: window.innerWidth
    });
    this.updateWidth();
    window.scrollTo(0, 0)
  }
  componentWillUnmount() {
    window.removeEventListener('resize', () => this.updateWidth());
  }

  content = () => {
    return (
      <>
        <CssBaseline />
        <Home id="home" />
        <NavigationBar mobile={this.state.mobileView} />
        <About id="about" />
        <References id="references" />
        <Services id="services" />
        <SpecialPlaces id="specialPlaces" />
        <Contact id="contact" />
      </>
    )
  }

  render() {
    return (
      <React.Fragment>
        {/*}ParallaxProvider>
          <ThemeProvider theme={theme} >
            <Router>
              <Switch>
                <Route exact path="/" component={this.content} />
                <Route path="/impressum" component={Impressum} />
                <Route component={NoMatch} />
              </Switch>
            </Router>
            <Footer />
          </ThemeProvider>
    </ParallaxProvider>*/}
        <ThemeProvider theme={theme} >
          <div className="App"
            style={{
              //backgroundImage: `url(${bg})`,
              backgroundColor: theme.palette.primary.main,
              backgroundSize: "auto 100%",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              height: "100vh",
              display: "grid",
              alignContent: "center",
              justifyItems: "center",

            }}>
            <Typography variant="h1" style={{color: "white", paddingBottom: "10px"}}>
              Pianoservice Kupski
            </Typography>
              <Typography variant="h2" style={{color: "white"}}>
                Hier kommt bald was!
        </Typography>

          </div>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import logo from '../logo.svg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const timers = {  
  loadIn: 2000,
  loadEnter: 4000,
  loadLeave: 8000,
  loadOut: 6000
}

// NavLink
const NavLink = (props) => (
  <Link {...props} activeClassName="active">
    <span data-hover={props.title}>{props.title}</span>
  </Link>
)

// Navbar
const Navbar = (props) => (
  <div className={props.className}>
    <NavLink className="link hover" to="/" onlyActiveOnIndex={true} title="Home"></NavLink>
    <NavLink className="link hover" to="/about" title="about"/>
    <NavLink className="link hover" to="/works" title="works"/>
    <NavLink className="link hover" to="/skills" title="skills"/>
  </div>
)

// Loader
const Loader = (props) => (
  <div id="loader" className={props.className}></div>
)

// Overlay
const Overlay = (props) => (
  <div id="overlay" onClick={props.onClick} className={props.className}></div>
)

// Header
const Header = (props) => (
  <header>    
    <Link to="/" onClick={props.onPageClick} activeClassName="active" className="brand"><img src={logo} alt="logo" /></Link>
    <Navbar onClick={props.onPageClick} className="nav" />
    <div onClick={props.onClick} className={props.state ? "btn--menu active" : "btn--menu"}><span></span><span></span><span></span><label>Menu</label></div>
  </header>
)

// Nav
const Nav = (props) => (
  <nav role="navigation" className={props.className}>
    <div onClick={props.onClick} className="btn--close"><span></span><label>Close</label></div>
    <h3>Main navigation</h3>
    <Navbar className="nav"/>
  </nav>
)

// Footer
const Footer = (props) => (
  <footer>    
    <div className="contacts">
      <div className="phone"><label>Телефон:</label><i className="icon-phone"></i><span>+7 (905) 864 01 15</span></div>
      <div className="skype"><label>skype:</label><i className="icon-skype"></i><span>cdgen@gmail.com</span></div>
    </div>
    <Social className="social-links"/>
  </footer>
)

const Social = (props) => (
  <div className={props.className}>
    <h4>Social links</h4>
    <a href="https://github.com/cdgen" title="github" className="item hover"><i className="icon-github"></i><span data-hover="github">github</span></a>
    <a href="https://facebook.com" title="facebook" className="item hover"><i className="icon-fb"></i><span data-hover="facebook">facebook</span></a>
    <a href="https://pinterest.com/cdgen" title="pinterest" className="item hover"><i className="icon-pinterest"></i><span data-hover="pinterest">pinterest</span></a>
  </div>
)

class MainLayout extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loadPage: false,
      navOpen: false
    }    
  }

  componentDidMount() {
    this.setState({
      loadPage: false,
      navOpen: false
    })
  }

  componentWillUnmount() {

  }

  componentWillReceiveProps() { 
    this.setState({
      loadPage: false,
      navOpen: false
    })
    
    var self = this;
    setTimeout( function() {
      self.setState({
        loadPage: true,
        navOpen: false
      })
    }, timers.loadIn)
    
    setTimeout( function() {
      self.setState({
        loadPage: false,
        navOpen: false
      })
    }, timers.loadOut)
  }
  
  menuClick = () => { this.setState({navOpen:!this.state.navOpen})}
  
  render() {
    return (
      <div id="wrapper" className={this.state.navOpen ? "navOpen" : ""} >
        <Header onClick={this.menuClick} state={this.state.navOpen} />        
        <Nav onClick={this.menuClick} className={this.state.navOpen ? "active" : null} />        
        <ReactCSSTransitionGroup component="main" transitionName="load" transitionEnterTimeout={timers.loadEnter} transitionLeaveTimeout={timers.loadLeave}>
          {React.cloneElement( this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
        <Footer/>
        <Overlay onClick={this.menuClick} className={this.state.navOpen ? "show" : "hide"} />
        <Loader className={this.state.loadPage ? "show" : "hide"} />
      </div>
    )
  }
  
}







export default MainLayout;
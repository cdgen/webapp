import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import logo from '../logo.svg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

const timers = {  
  loadIn: 1000,
  loadEnter: 4000,
  loadLeave: 2000,
  loadOut: 3000
}

// NavLink
const NavLink = (props) => (
  <Link {...props} activeClassName="active">
    <i className={props.icon}></i>
    <span className="link-title" data-hover={props.title}>{props.title}</span>
    <span className="link-num">{props.num}</span>
  </Link>
)

// Navbar
const Navbar = (props) => (
  <div className={props.className}>
    <NavLink className="link hover" to="/"        title="Home"    num="01" icon="icon-home" onlyActiveOnIndex={true}/>
    <NavLink className="link hover" to="/about"   title="about"   num="02" icon="icon-information"/>
    <NavLink className="link hover" to="/works"   title="works"   num="03" icon="icon-contact"/>
    <NavLink className="link hover" to="/skills"  title="skills"  num="04" icon="icon-settings"/>
  </div>
)

// Loader
const Loader = (props) => (
  <div id="loader" className={props.className}></div>
)

// Overlay
const Overlay = (props) => (
  <div id="overlay" onClick={props.switcher} className={props.className}></div>
)

// Header
const Header = (props) => (
  <header>
    <Link to="/" activeClassName="active" className="brand"><img src={logo} alt="logo" /></Link>
    <Navbar className="nav"/>
    <div onClick={props.switcher} className={props.state ? "btn--menu active" : "btn--menu"} data-target="nav"><span></span><span></span><span></span><label>Menu</label></div>
  </header>
)

// Nav
const Nav = (props) => (
  <nav role="navigation" className={props.className}>
    <div onClick={props.onClick} className="btn--close"><span></span><label>Close</label></div>
    <h3><span>main</span><span>menu</span><div className="line"></div></h3>
    <Navbar className="nav"/>
  </nav>
)

// Footer
const Footer = (props) => (
  <footer>    
    <div className="cx6 pad00 contacts">
      <div className="phone"><i className="icon-phone"></i><span>+7 (905) 864 01 15</span></div>
      <div className="skype"><i className="icon-skype"></i><span>cdgen@gmail.com</span></div>
    </div>
    <div className="cx6 pad00 social-links">
      <h4>Social links</h4>
      <a href="https://github.com/cdgen" title="github" className="item hover"><i className="icon-github"></i><span data-hover="github">github</span></a>
      <a href="https://facebook.com" title="facebook" className="item hover"><i className="icon-fb"></i><span data-hover="facebook">facebook</span></a>
      <a href="https://pinterest.com/cdgen" title="pinterest" className="item hover"><i className="icon-pinterest"></i><span data-hover="pinterest">pinterest</span></a>
    </div>
  </footer>
)

class MainLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isActive: false,
      classWrap: null,
      timeout: setTimeout(this._loadState, 2000)
    }
    this._loadState = this._loadState.bind(this);
    this._switcherTo = this._switcherTo.bind(this);
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
      isActive: false,
      classWrap: 'load',
      timeout: setTimeout(this._loadState, 2000)
    })
  }

  componentWillReceiveProps() {
    this.setState({
      isLoading: true,
      classWrap: 'load',
      timeout: setTimeout(this._loadState, 2000)
    })
  }

  _loadState() {
    this.setState({
      isLoading: false,
      classWrap: 'loaded'
    })
  }
  
	_switcherTo(e) {
		e.preventDefault();
		var targetElem = e.currentTarget.getAttribute("data-target");    
		this.setState({
      isActive:!this.state.isActive,
      classWrap: targetElem
    });
	}
  
  render() {
  
    let classes = {
      wrapClass: this.state.isActive ? "open "+this.state.classWrap : "",
      loaderClass: this.state.isLoading ? "show" : "hide",
    }
  
    return (
      <div id="wrapper" className={classes.wrapClass}>
      
        <Header switcher={this._switcherTo} />
        
        <Nav onClick={this._switcherTo} className={this.state.isActive ? "active" : null} />
        
        <ReactCSSTransitionGroup component="main" transitionName="load" transitionEnterTimeout={timers.loadEnter} transitionLeaveTimeout={timers.loadLeave}>
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
        
        <Footer/>
        
        <Overlay switcher={this._switcherTo} className={this.state.isActive ? "show" : "hide"} />
        
        <Loader className={classes.loaderClass} />
      </div>
    )
  }
  
}

export default MainLayout;
import React from 'react';
import Link from 'react-router';
import logo from '../../logo.svg'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Loader from '../loader'
import Form from '../form'

const options = {
  transitionName: "load",
  transitionClassName: "js_load",
  loadTimeDuration: 2000,
  transitionEnterTimeout: 2 * 2000
}



class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    
    this.loadState = this.loadState.bind(this);
    this.switcherTo = this.switcherTo.bind(this);
    this.closemodal = this.closemodal.bind(this);
    
    this.state = {
      isLoading: false,
      isOpen: false,
      classWrap: null,
      timeout: setTimeout(this.loadState, options.loadTimeDuration)
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
      isOpen: false,
      classWrap: 'load',
      timeout: setTimeout(this.loadState, options.loadTimeDuration)
    })
  }

  componentWillReceiveProps() {
    this.setState({
      isLoading: true,
      classWrap: 'load',
      timeout: setTimeout(this.loadState, options.transitionEnterTimeout)
    })
  }

  loadState() {
    this.setState({
      isLoading: false,
      classWrap: 'loaded'
    })
  }
  
	switcherTo(e) {
		e.preventDefault();
    if(this.state.isOpen) {return false}    
		const targetTo = e.currentTarget.getAttribute("data-target");
    this.setState({
      isOpen: true, classWrap: targetTo
    });
	}
  
	closemodal(e) {
		e.preventDefault();
    this.setState({
      isOpen: false, classWrap: null
    });
	}
  
  render() {
  
    let classes = {
      wrapClass: this.state.isOpen ? "open "+this.state.classWrap : "",
      loaderClass: this.state.isLoading ? "show" : "hide",
      formClass: this.state.classWrap === "cta" ? "modal active" : "modal"
    }
  
    return (
      <div id="wrapper" className={classes.wrapClass}>
        <header>
          <Link to="/" activeClassName="active" className="brand"><img src={logo} alt="logo" /></Link>
          <div className="cx6 pad00 contacts">
            <div className="phone"><i className="icon-phone"></i><span>+7 (905) 864 01 15</span></div>
            <div className="skype"><i className="icon-skype"></i><span>cdgen@gmail.com</span></div>
          </div>
          <div onClick={this.switcherTo} className={this.state.classWrap === "cta" ? "btn--cta active" : "btn--cta"}   data-target="cta"><i className="icon-mail"></i><label>Call me</label></div>
          <div onClick={this.switcherTo} className={this.state.classWrap === "nav" ? "btn--menu active" : "btn--menu"} data-target="nav"><span></span><span></span><span></span><label>Menu</label></div>
        </header>

        <nav role="navigation" className={this.state.classWrap === "nav" ? "active" : null}>
          <div className="side-left info">
            <div onClick={this.switcherTo} className="btn--close"><span></span><label>Close</label></div>
            <h3><span>main</span><span>menu</span><div className="line"></div></h3>
          </div>
          <Navbar className="side-right nav"/>
        </nav>

        <aside>
          <Navbar className="nav"/>
        </aside>

        <ReactCSSTransitionGroup 
          component="main" 
          transitionName={options.transitionName}
          className={options.transitionClassName}
          transitionEnterTimeout={options.transitionEnterTimeout} 
          transitionLeaveTimeout={options.loadTimeDuration}
        >
          {React.cloneElement(this.props.children, {key: this.props.location.pathname})}
        </ReactCSSTransitionGroup>
        
        <Footer/>
        
        <div id="cta" className={this.state.classWrap === "cta" ? "modal active" : "modal"}>
          <div onClick={this.switcherTo} className="btn--close"><span></span><label>Close</label></div>
          <h3><span>main</span><span>menu</span><div className="line"></div></h3>
        </div>
        <Form className={classes.formClass} />
        
        <div id="overlay" onClick={this.closemodal} className={this.state.isOpen ? "show" : "hide"}></div>
        <Loader className={classes.loaderClass} />
      </div>
    )
  }
  
}


// NavLink
const NavLink = (props) => (
  <Link to={props.to} activeClassName="active" className={props.className} title={props.title} onlyActiveOnIndex={props.onlyActiveOnIndex}>
    <i className={props.icon}></i>
    <span className="link-title" data-hover={props.title}></span>
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

// Footer
const Footer = (props) => (
  <footer>    
    <div className="cx6 pad00 social-links">
      <h4>Social links</h4>
      <a href="https://github.com/cdgen" title="github" className="item hover"><i className="icon-github"></i><span data-hover="github"></span></a>
      <a href="https://facebook.com" title="facebook" className="item hover"><i className="icon-fb"></i><span data-hover="facebook"></span></a>
      <a href="https://pinterest.com/cdgen" title="pinterest" className="item hover"><i className="icon-pinterest"></i><span data-hover="pinterest"></span></a>
    </div>
  </footer>
)

export default MainLayout;
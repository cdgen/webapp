import React, { Component } from 'react';
import { Link } from 'react-router';
import logo from '../logo.svg';

// Header
class Header extends Component {
  render() {
    return (
			<header>
				<a href="#" className="brand"><img src={logo} alt="logo" /></a>
        <nav>
          <Link to="/" activeClassName="active">Home</Link>
          <Link to="/about" activeClassName="active">About</Link>
          <Link to="/works" activeClassName="active">Works</Link>
          <Link to="/skills" activeClassName="active">Skills</Link>
        </nav>
        <div onClick={this.props.onClick} className={ this.props.state ? "btn--menu active" : "btn--menu"}><span></span><span></span><span></span><label>Menu</label></div>
			</header>
		);
	}
}

// Nav
class Nav extends Component {
  render() {
    return (
			<nav role="navigation" className={ this.props.state ? "active" : null}>
				<div onClick={this.props.onClick} className="btn--close"><span></span><label>Close</label></div>
          <Link to="/" activeClassName="active">Home</Link>
          <Link to="/about" activeClassName="active">About</Link>
          <Link to="/works" activeClassName="active">Works</Link>
          <Link to="/skills" activeClassName="active">Skills</Link>
			</nav>
		)
	}
}
const page1 = {	
	title: "Creative design  generator",
	subTitle: "Web-дизайнер и FrontEnd-разработчик",
	num: "01", 
  cat: "intro"
}
const Loader = (props) => (
  <div id="loader" className={props.state.loadPage ? "show" : "hide"}></div>
);

const Overlay = (props) => (
  <div id="overlay" onClick={props.onClick} className={props.className}></div>
);

const Title = (props) => (
    <div className="page--title">
      <h1>{props.title}</h1>
      <h4>{props.subTitle}</h4>
    </div>
);

class MainLayout extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loadPage: false,
      navOpen: false
    }
  }
  
  menuClick = () => {
    this.setState(
      {navOpen:!this.state.navOpen}
    )
  }

  render() {
    return (
      <div id="wrapper" className={ this.state.navOpen ? "navOpen" : ""}>
        <Header onClick={this.menuClick} state={this.state.navOpen} />
        <Nav onClick={this.menuClick} state={this.state.navOpen} />
        <main>
           {this.props.children}
        </main>
        <Overlay onClick={this.menuClick} state={this.state.navOpen} className={this.state.navOpen ? "show" : "hide"} />
        <Loader  state={this.state.loadPage} />
      </div>
    );
  }
}

export default MainLayout;

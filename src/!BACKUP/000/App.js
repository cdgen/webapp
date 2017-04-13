import React, { Component } from 'react';
import logo from './logo.svg';
import '.styles/App.css';
import { Title } from 'MainLayout';

const page1 = {	
	title: "Creative design  generator",
	subTitle: "Web-дизайнер и FrontEnd-разработчик",
	num: "01", 
  cat: "intro"
}
const page2 = {	
	title: "My skills an tools",
	subTitle: "Web-дизайнер и FrontEnd-разработчик",
	num: "02", 
  cat: "intro"
}


// Header
class Header extends Component {
  render() {
    return (
			<header>
				<a href="#" className="brand"><img src={logo} alt="logo" /></a>
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
        {this.props.children}
			</nav>
		)
	}
}

const Loader = (props) => (
  <div id="loader" className={props.state.loadPage ? "show" : "hide"}></div>
);

const Overlay = (props) => (
  <div id="overlay" onClick={props.onClick} className={props.className}></div>
);

// Page
class Page extends Component {
  render() {
    return (
			<div id="page">
        <Title page={this.props.page} />
			</div>
		)
	}
}

const Title = (props) => (
    <div className="page--title">
      <div className="page--cat"> 
        <label>Category:</label>
        <span>{props.page.cat}</span>
      </div>
      <div className="page--num"> 
        <label>Page:</label>
        <span>{props.page.num}</span>
      </div>
      <h1>{props.page.title}</h1>
      <h4>{props.page.subTitle}</h4>
    </div>
);

// App Component
class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      loadPage: false,
      curPage: page1,
      navOpen: false
    }
  }
  
  menuClick = () => {
    this.setState(
      {navOpen:!this.state.navOpen}
    );
  }
  
  gotoPage = (nextPage) => {
    this.setState({ curPage: nextPage });
  };
    
  render() {
    return (
      <div id="wrapper" className={ this.state.navOpen ? "navOpen" : ""}>
        <Header onClick={this.menuClick} state={this.state.navOpen} />
        <Nav  onClick={this.menuClick} state={this.state.navOpen} {...this.props}>
          <div className="link bMain cWhite" onClick={ev => this.gotoPage(page1)}>Page 1</div>
          <div className="link bMain cWhite" onClick={ev => this.gotoPage(page2)}>Page 2</div>
        </Nav>
        <main>
          <Page page={this.state.curPage} />
        </main>
        <Overlay onClick={this.menuClick} state={this.state.navOpen} className={this.state.navOpen ? "show" : "hide"} />
        <Loader  state={this.state.loadPage} />
      </div>
    )
  }
}

// Rendering to DOM

export default App;
import React, {Component} from 'react'
import Link from 'react-router/lib/Link'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


import Header from './header';
import Nav from './nav';
import PageLayout from './page-layout';
import Aside from './aside';
import Footer from './footer';
import Form from './form';
import Loader from './loader';



const options = {
  transitionName: "load",
  transitionClassName: "js_load",
  transitionLeaveTimeout: 1000,
  transitionEnterTimeout: 2 * 1000
}

class MainLayout extends Component {

  constructor(props) {
    super(props);
    
    this.state = {  }
    this._containerDOM = null;
    this._scrollPosition = 0;
    this.onScroll = this.onScroll.bind(this);
    
    this.loadState = this.loadState.bind(this);
    this.switcherTo = this.switcherTo.bind(this);
    this.closemodal = this.closemodal.bind(this);
    
    this.state = {
      isLoading: false,
      isOpen: false,
      classWrap: null,
      timeout: setTimeout(this.loadState, this.props.transitionLeaveTimeout),
      
      height: undefined
    }
  }
  componentDidMount() {
    this.setState({
      isLoading: true,
      isOpen: false,
      classWrap: 'load',
      timeout: setTimeout(this.loadState, this.props.transitionLeaveTimeout)
    })
    window.addEventListener('scroll', this.onScroll)
  }

  componentWillReceiveProps() {
    document.getElementById('root').classList.add('load');    
    this.setState({
      isLoading: true,
      classWrap: 'load',
      timeout: setTimeout(this.loadState, this.props.transitionEnterTimeout)
    })
  }

  loadState() {
    document.getElementById('root').classList.remove('load');
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
  
  onScroll () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (this.props.scrollAction >= scrollTop) {
      const step = this._scrollPosition - scrollTop;
      const actualHeight = this._containerDOM.offsetHeight;
      const height = actualHeight + step;
      this.setState({ height });
      this._scrollPosition = scrollTop;
    }
  }

  render() {
  
    let classes = {
      wrapClass: this.state.isOpen ? "open "+this.state.classWrap : "",
      loaderClass: this.state.isLoading ? "show" : "hide",
      navClass: this.state.classWrap === "nav" ? " active" : null,
      formClass: this.state.classWrap === "cta" ? "modal active" : "modal",
      overlayClass: this.state.isOpen ? "show" : "hide"
    }

  return (
      <div id="wrapper" className='heroHeader'
        ref={n => this._containerDOM = n}
        style={{height: this.state.height }}>
        
        <Header/>
        
        <Nav className={classes.navClass} />   
        
        <ReactCSSTransitionGroup component="main" 
          transitionName="load"
          className="js_load"
          transitionEnterTimeout={this.props.transitionEnterTimeout} 
          transitionLeaveTimeout={this.props.transitionLeaveTimeout}
        >
          {React.cloneElement(this.props.children, {key: this.props.location.pathname} )}
        </ReactCSSTransitionGroup>
        
        <Aside onClick={this.switcherTo} />
        <Footer/>        
        <Form className={classes.formClass} onClick={this.closemodal} />
        <div id="overlay" onClick={this.closemodal} className={classes.overlayClass}></div>
        <Loader className="hide" className={classes.loaderClass} isOpen={this.state.isLoading} delay={this.props.transitionLeaveTimeout} />
      </div>
    )
  }
}



MainLayout.propTypes = {
  scrollAction: React.PropTypes.string,
  transitionEnterTimeout: React.PropTypes.number,
  transitionLeaveTimeout: React.PropTypes.number
};

MainLayout.defaultProps = {
  scrollAction: '2500',
  transitionEnterTimeout: 4000,
  transitionLeaveTimeout: 2000
};


export default MainLayout;
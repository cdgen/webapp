import React from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {Motion, spring} from 'react-motion';


class TestOne extends React.Component {
  constructor() {
    super();
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.state = {open: false}
  }
  
  handleMouseDown() {
    this.setState({
      open: !this.state.open
    })
  }

  handleTouchStart(e) {
    e.preventDefault();
    this.handleMouseDown();
  }

  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <Motion style={{
          x: spring(this.state.open ? 400 : 0)}
        }>
          {({x}) =>
            // children is a callback which should accept the current value of `style`
            <div className="demo0">
              <div className="demo0-block" style={{
                width: '10em',
                height: '10em',
                backgroundColor: 'black',
                WebkitTransform: `translate3d(${x}px, ${x}px, 0)`,
                transform: `translate3d(${x}px, ${x}px, 0)`,
              }} />
            </div>
          }
        </Motion>
      </div>
    )
  }
}

class ToggleButton extends React.Component {

  static defaultProps = {
    height: '1.5em'
  };

  render() {
    const style = {
      container: {
        cursor: 'pointer'
      },
        inner: {
        fill: 'none',
        stroke: 'currentColor',
        strokeWidth: '3',
        strokeLinecap: 'round',
        strokeLinejoin: 'round'
      },
      ...this.props.style
    }
    
    const totalLength = 72.7977294921875
    const circleLength = 50.24085998535156
    const checkedLength = -22.55687141418457

    const defaultSpring = -totalLength
    const circleSpring = spring(circleLength, {stiffness: 60, damping: 11})
    const checkedSpring = spring(checkedLength, {stiffness: 120, damping: 13.8})

    return (
      <svg {...this.props} style={style.container} viewBox="0 0 24 24" >
        <g style={style.inner}>
          <Motion
            defaultStyle={{offset: defaultSpring}}
            style={{offset: this.props.active ? circleSpring : checkedSpring}}
          >
          {({ offset }) =>
            <path
              strokeDasharray={`${totalLength} ${totalLength}`}
              strokeDashoffset={offset}
              d="M20 6.7L9.3 17.3 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8"
            />
          }
          </Motion>
        </g>
      </svg>
    )
  }
}

class TestMotion extends React.Component {
  static defaultProps = {
    height: '10em'
  };

  render() {
    const style = {
      wrapper: {
        width: 100,
        height: 100,
      },
      inner: {
      fill: 'none',
      stroke: 'currentColor',
      strokeWidth: '3',
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    },
      ...this.props.style
    }

    const totalLength = 50
    const circleLength = 50
    const checkedLength = -25

    const defaultSpring = -totalLength
    const circleSpring = spring(circleLength, {stiffness: 60, damping: 11})
    const checkedSpring = spring(checkedLength, {stiffness: 120, damping: 13.8})

    return (
      <svg {...this.props} style={style.wrapper} viewBox="0 0 36 36" >
        <g style={style.inner}>
          <Motion defaultStyle={{offset: defaultSpring}} style={{offset: this.props.test ? circleSpring : checkedSpring}}>
          {({ offset }) =>
            <path 
              strokeDasharray={`${totalLength} ${totalLength}`}
              strokeDashoffset={offset}
              d="M35,0H1C0.448,0,0,0.447,0,1v34c0,0.553,0.448,1,1,1h34c0.552,0,1-0.447,1-1V1C36,0.447,35.552,0,35,0z M34,34H2V2h32V34z"
            />
          }
          </Motion>
        </g>
      </svg>
    )
  }
}


class Test extends React.Component {
  constructor() {
    super()    
    this.state = {
      active: false,
      test: false,
    }
  }
  
  handleToggle() {
    this.setState({active: !this.state.active})
  }
  
  test_handleToggle() {
    this.setState({test: !this.state.test})
  }
  
  render() {
  
    const style = {
      fontSize: '6em',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    }
    
    const styleTest = {
      fontSize: '6em',
      position: 'absolute',
      top: '20%',
      left: '20%',
      transform: 'translate(0%, 0%)'
    }
    return (
    <div>
      <span style={style} onClick={this.handleToggle.bind(this)}>
        <ToggleButton active={this.state.active} />
      </span>
      
      <span style={styleTest} onClick={this.test_handleToggle.bind(this)}>
        <TestMotion test={this.state.test}/>
      </span>
      <TestOne />
      </div>
    )
  }
}


export default Test;

import React, { Component } from 'react';
import classNames from 'classnames/bind'
import React.addons.CSSTransitionGroup from 'react-addons-css-transition-group'

class Slider extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  };

  state = {
    index: 0,
  };

  renderChildSlides = (currentIndex, children) => {
      return React.Children.toArray(children).reduce((childrenToRender, _, index) => {
        if (index < currentIndex - 1 || index > currentIndex + 1) {
          return childrenToRender;
        }

        const classes = classNames('slide', {
          current: index === currentIndex,
          previous: index === currentIndex - 1,
          next: index === currentIndex + 1,
        });

        return [
          ...childrenToRender,
          (<div key={index} className={classes} onClick={this.selectSlide(index)}>{index}</div>),
        ];
      }, []);
  };

  selectSlide = (index) => () => {
    this.setState({ ... this.state, index });
  };

  renderDotIndicators = (currentIndex, children) => {
    return children.map((_, index) => {
      const classes = classNames('indicator', {
        active: index === currentIndex,
      });
      return (
        <div className={classes}></div>
      );
    });
  };

  close = () => {
    alert('Closing');
  };

  renderNextButton = (currentIndex, children) => {
    if (currentIndex + 1 < React.Children.count(children)) {
      return (
        <button type="button" onClick={this.selectSlide(currentIndex + 1)}>Weiter</button>
      );
    }
    
    return (
      <button type="button" onClick={this.close}>Zu deiner Seite</button>
    )
  };

  render() {
    return (
      <div className="slider">
        <div className="content-wrapper">
          <div className="content">
            <React.addons.CSSTransitionGroup
              transitionName="slide" 
              transitionEnterTimeout={500} 
              transitionLeaveTimeout={500}
            >
              {this.renderChildSlides(this.state.index, this.props.children)}
            </React.addons.CSSTransitionGroup>
          </div>
          <div className="indicators">
            {this.renderDotIndicators(this.state.index, this.props.children)}
          </div>
          <div className="indicators">
            {this.renderNextButton(this.state.index, this.props.children)}
          </div>
        </div>
      </div>
    );
  }
}

function Carousel(props) {
  return (
    <Slider>
      <div>Content 1</div>
      <div>Content 2</div>
      <div>Content 3</div>
      <div>Content 4</div>
      <div>Content 5</div>
      <div>Content 6</div>
      <div>Content 7</div>
    </Slider>
  );
}
export default Carousel;
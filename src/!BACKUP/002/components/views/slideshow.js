import React, { Component } from 'react';

class SlideShow extends Component {
  constructor(props) {
    super(props);    
    this.prevItem = this.prevItem.bind(this);
    this.nextItem = this.nextItem.bind(this);    
    this.loadState = this.loadState.bind(this);
    
    this.state = {
      counter: 0,
      anmState: 'loading',
      timeout: setTimeout(this.loadState,  this.props.loadTime)
    }
  }

  loadState() { 
    this.setState({ anmState: 'loaded'})
  }

  prevItem() {
    var prevItem = this.state.counter - 1 < 0 ? this.props.items.length - 1 : this.state.counter - 1;
    this.setState({
      counter: prevItem,
      anmState: 'loading prev',
      timeout: setTimeout(this.loadState,  this.props.loadTime )
    });
  }

  nextItem() {
    var nextItem = this.state.counter + 1 < this.props.items.length ? this.state.counter + 1 : 0;
    this.setState({
      counter: nextItem,
      anmState: 'loading next',
      timeout: setTimeout(this.loadState, this.props.loadTime)
    });
  }
  
  render() {
    const items = this.renderItems(this.props.items);
    return (
      <div className={"slider " + this.state.anmState}>
        <div className="btn--prev" onClick={this.prevItem}></div>
        { items }
        <div className="btn--next" onClick={this.nextItem}></div>
      </div>
    );
  }

  renderItems(items) {
      return items.map((item, index) => this.renderItem( item, (this.state.counter === index))
    );
  }

  renderItem(item, current, prev) {
    return (
      <CarouselItem {...item} current={current} ></CarouselItem>
    );
  }
}

class CarouselItem extends React.Component {

  render() {
  
    let [firstWorld, ...secWorld] = this.props.title.split(" ")

    let	styleBg = {
      backgroundImage: 'url(' + this.props.img + ')'
    }

    return (
      <div className={"slider-item " + (this.props.current ? 'current':'' )}>        
        <div className="slider-title">
          <div className="title-num">
            <span className="num__current">{this.props.num}</span>
            <span className="num__total">04</span>
          </div>
          <div className="title-cat">
            <span className="cat__label">SN</span>
            <span className="cat__value">{this.props.cat}</span>
          </div>
          <div className="title-text">
            <h2><span>{firstWorld}</span><span>{secWorld}</span></h2>
            <p>{this.props.subTitle}</p>
            <div className="line"></div>
          </div>
          <div className="bg__mask"><div className="mask__inner" style={styleBg}></div></div>
        </div>
        <div className="slider-bg" style={styleBg}></div>
      </div>
    );
  }
}

export default SlideShow;
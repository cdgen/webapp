import React, { Component } from 'react';

class Items extends Component {
  constructor(props) {
    super(props);
    this.state = this.props.data
  }
  // Get items from data object
  getItems() {
    return this.state.items;
  }

  setIndex(input) {
    return 1 * (input.index+1);
  }
  
  render() {
    return(
      <div className={this.props.className}>
        {this.getItems().map((item, index) => 
           <Item key={item.id} data={item} style={{transitionDelay:'1.'+ (index+1)*2 + 's'}} />
         )}
      </div>
    )
  }
}

class Item extends Component {
	render() {
    let [firstWorld,...secWorld]  = this.props.data.title.split(" ")
		return (
			<div id={this.props.data.id} className={this.props.data.itemClass+" active"}>
        <div className="caption" style={this.props.style}>
          <div className="item-num">{this.props.data.num}</div>
          <div className="item-cat txt">{this.props.data.cat}</div>
          <h3><span>{firstWorld}</span><span>{secWorld}</span></h3>
          <p>{this.props.data.subTitle}</p>
        </div>
        <div className={this.props.data.bg} style={this.props.style}></div>
			</div>
		);
	}
}

export default Items;
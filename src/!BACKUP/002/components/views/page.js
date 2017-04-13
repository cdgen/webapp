import React, { Component } from 'react';

class Items extends Component {
	render() {
		return (
			<div className={this.props.className}>
				{this.props.items.map((item) => {
					return <Item data={item} key={item.id} />
				})}
			</div>
		)
	}
}


const Item = (props) => (
  <div className={props.data.itemClass}>
    <div className="item-cat">{props.data.cat}</div>
    <div className="item-num">{props.data.id}</div>
    <h2>{props.data.title}</h2>
    <p>{props.data.subTitle}</p>
  </div>
)

const Page = (props) => (
  <Items {...props}/>
)

export default Page;

import React from 'react';

const Title = (props) => ({
  render() {
    const [firstWorld,...secWorld] = props.title.split("_")
    return (
      <div className={props.titleClass + " title"}>
        <div className="title-num">
          <span className="current">{'0'+props.num}</span>
          <div className="line"></div>
          <span className="total">04</span>
        </div>
        <div className="title-cat">{props.cat}</div>
        <div className="title-text">
          <h2><span>{firstWorld}</span><span>{secWorld}</span></h2>
          <p>{props.subTitle}</p>
        </div>
      </div>
    )
  }
})

export default Title;
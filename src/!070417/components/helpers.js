import React from 'react';

const Title = (props) => ({
  render() {
    const [firstWorld, ...secWorld] = props.title.split("_")
    return (
      <div className="section-title">
        <div className="title-num">
          <span className="num__current">{'0'+props.num}</span>
          <div className="line"></div>
          <span className="num__total">04</span>
        </div>
        <div className="title-cat">
          <span className="cat__label">SN</span>
          <span className="cat__value">{props.cat}</span>
        </div>
        <div className="title-text">
          <h2><span>{firstWorld}</span><span>{secWorld}</span></h2>
          <p>{props.subTitle}</p>
        </div>
      </div>
    )
  }
})

export default Title;
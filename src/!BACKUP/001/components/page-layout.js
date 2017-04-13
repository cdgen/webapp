import React from 'react';

const H1 = (props) => ({
  render() {
    let [l1,...l2] = props.title.split("_");
    return (<h1><span>{l1}</span><span>{l2}</span></h1>)
  }
})

const PageLayout = (props) => (
  <div className="page">
    <div className="page-title">
      <div className="title-num">
        <span className="num__current">{props.num}</span>        
        <span className="num__total">04</span>
      </div>
      <div className="title-cat">
        <label>Category</label>
        <span>{props.cat}</span>
      </div>
      <div className="title-text">
        <H1 title={props.title}/>
        <h4><span>{props.subTitle}</span></h4>
      </div>
    </div>
    <div className="page-content">
      {props.children}
    </div>
  </div>
)

export default PageLayout;
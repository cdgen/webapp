import React, {Component} from 'react'
import Link from 'react-router/lib/Link'

class PageLayout extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id="page" className="page">
        <PageTitle {...this.props}/>
        <div className="page-content">
          {this.props.children}
        </div>
      </div>
    )
  }
}

let H1 = (props) => ({
  render() {
  let [l1,...l2] = props.title.split("_");
    return (<h1><span>{l1}</span><span>{l2}</span></h1>)
  }
})

const PageTitle = (props) => (
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
)

export default PageLayout;
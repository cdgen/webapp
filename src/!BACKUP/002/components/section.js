import React, {Component} from 'react'

class Section extends Component {
  constructor(props) {
    super(props);
  }  
  render() {
    return (
      <section className={this.props.itemClass}>
        <SectionTitle {...this.props}/>
        <SectionContent {...this.props}/>
      </section>
    )
  }
}

let H2 = props => {
  let [l1,...l2] = props.title.split("_");
  return (<h2><span>{l1}</span><span>{l2}</span></h2>)
}

const SectionTitle = (props) => (
  <div className="section-title">
    <div className="section-num">
      <span className="num__current">{props.num}</span>
      <span className="num__total">04</span>
    </div>
    <div className="section-cat">
      <label>Category</label>
      <span>{props.cat}</span>
    </div>
    <div className="section-text">
      <H2 title={props.title}/>
      <h4><span>{props.subTitle}</span></h4>
    </div>
  </div>
)

const SectionContent = (props) => (
  <div className="section-content">
    {props.children}
  </div>
)

export default Section;
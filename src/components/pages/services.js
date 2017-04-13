import React, { Component } from "react";
import PageLayout from "../page-layout";
import Title from "../helpers"

const servicesData = {
"head": {
  "id":"page04_services",
  "num":"04",
  "cat":"services",
  "url":"services",
  "title":"services_and skills",
  "subTitle":"Services, skills and tools"
},
"sections":[
  {
    "id": "page04_01_design",
    "num": "1",
    "cat": "Design",
    "title": "Графический дизайн_веб-дизайн",
    "subTitle": "Мои скиллы, точнее те из них, что достаточно прокачанны, чтобы применять их на практике в обмен на деньги. Нудный список разбавлен картинками и пояснениями - зачем оно вообще надо!",
    "itemClass": "grid bLight design",
    "titleClass": "cx4 hx6",
    "iconClass": "icon-design",
    "bgClass": "bMain",
    "items": [
      {
        "id": "01",
        "cat": "Design",
        "title":"UI/UX-дизайн_Проектирование интерфейсов",
        "subTitle":"Один из самых сложных этапов разработки, значение которого легко недооценивать, но сложно переоценить.",
        "value": "90",
        "itemClass": "item cx8 hx3 bWhite ux-design",
        "iconClass":"icon-design",
        "bgClass":"bMain"
      },
      {
        "id":"02",
        "cat": "Design",
        "title": "Web дизайн_",
        "subTitle":"Креативный дизайн сайтов",
        "value":"80",
        "itemClass":"item cx4 hx3 bDark cWhite web-design",
        "iconClass":"icon-social"
      },
      {
        "id":"03",
        "cat":"Design",
        "title": "Creative_Deisign",
        "subTitle":"Photoshop, Illustrator",
        "value":"90",
        "itemClass":"item cx4 hx3 bMain cWhite",
        "iconClass":"icon-javascript"
      }
    ]
  },
  {
    "id": "page_04_02_dev",
    "num": "2",
    "cat": "development",
    "title": "FrontEnd_development",
    "subTitle": "Разработка сайтов и пользовательских интерфейсов",
    "itemClass": "grid bWhite develoment",
    "component":"Item",
    "items": [
      {
        "id": "01",
        "cat": "skillset",
        "title":"HTML",
        "subTitle":"HTML5 / HTML, CSS",
        "value": "90",
        "itemClass": "skills-item cx3"
      },
      {
        "id":"02",
        "cat":"skillset",
        "title":"ReactJS_VanillaJS",
        "subTitle":"VanillaJS, ReactJS, GSAP",
        "value":"80",
        "itemClass":"skills-item cx3"
      }
    ]
  }
]
}

let data = servicesData;

const Services = () => (
  <PageLayout {...data.head}>
    <Sections content={data.sections} className="Sectionr" />
  </PageLayout>
)


const CSS_PREFIX = 'sections';
const getClassName = name => `${CSS_PREFIX}-${name}`;

const classRoot = CSS_PREFIX;
const classWrap = "grid";
const classItem = getClassName('item');
const classDots = getClassName('nav');


class Sections extends React.Component {
  constructor(props) {  
    super(props);
    
    // Sections actions bind
    this.prevSection = this.prevSection.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.SectionTo = this.SectionTo.bind(this);
    
    this.state = {
      Sections: this.props.content,
      SectionsCount: this.props.content.length,
      SectionActive: 0
    }
  }
  
  propTypes: {
    SectionsCount: React.PropTypes.number,
    SectionActive: React.PropTypes.number,
  }

  componentDidMount() {
    this.state = {
      Sections: this.props.content,
      SectionsCount: this.props.content.length,
      SectionActive: 0
    }
  }
  
	SectionTo(e) {
		e.preventDefault();
		let targetTo = Number(e.currentTarget.getAttribute("data-target"));
    this.setState({
      SectionActive: targetTo
    });
	}

  prevSection() {
    let prevIndex = this.state.SectionActive - 1 < 0 ? this.state.SectionsCount - 1 : this.state.SectionActive - 1;
    this.setState({
      SectionActive: prevIndex
    });
  }
  
  nextSection() {
    let nextIndex = this.state.SectionActive + 1 < this.state.SectionsCount ? this.state.SectionActive + 1 : 0;
    this.setState({
      SectionActive: nextIndex
    });
  }
  
  isActive(value){
    if(this.state.SectionActive === value){
      return true;
    }
  }
  
  render() {
    let total = this.state.SectionsCount;
    const Sections = this.state.Sections.map((item, index) =>  
      <Content key={index} {...item} active={this.isActive(index)} count={index} total={total} />
    )

    const dots = this.state.Sections.map((item, index) => {
        return (<Dot  key={index} {...item} active={this.isActive(index)} target={index} onClick={this.SectionTo} total={total}></Dot>  )
      }
    )

    return (
      <div className={classRoot}>
        { Sections }
        <div className={classDots}>
          { dots }
          <div className="btn--prev" onClick={this.prevSection}></div>
          <div className="btn--next" onClick={this.nextSection}></div>
        </div>
      </div>
    );
  }
}

class Dot extends React.Component {
  render() { 
    return (
      <div className={"nav-item " + (this.props.active ? 'active':'' )} data-target={this.props.target} onClick={this.props.onClick}><span className="dot-label">{this.props.cat}</span></div>
    );
  }
}

class Content extends Component {
   renderItems(items) {
    return items.map((item, index) => this.renderItem(item, index))
  }
  
  renderItem(item, index) {
    let style = {transitionDelay: (index+1) *500 + 'ms'}
    return (
      <Item key={index} {...item} style={style} />
    )
  }
  
  render() { 
    let [firstWorld, ...secWorld] = this.props.title.split(" ")
    const items = this.renderItems(this.props.items);

    return (
        <div className={this.props.itemClass + (this.props.active ? ' active':'' )}>
            <Title {...this.props}/>
            {items}
        </div>
    );
  }
}

const Split = (props) => ({
  render() {
    const [firstWorld,...secWorld] = props.title.split("_")
    return <h2><span>{firstWorld}</span><span>{secWorld}</span></h2>
  }
})

const Item = (props) => (
  <div className={props.itemClass}>
    <div className="item-num">
      <span className="num__current">{props.id}</span>
      <span className="num__total">04</span>
    </div>
    <div className="item-cat">{props.cat}</div>
    <i className={props.iconClass}></i>
    <div className="item-value">{props.value}</div>
    <Split title={props.title}/>
    <p>{props.subTitle}</p>
    <div className={props.bgClass} style={props.style} />
  </div>
)

export default Services;

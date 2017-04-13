import React, { Component } from "react";
import PageLayout from "../page-layout";
import Title from "../helpers"

const data = [
{ title: 'page1',
  id: 'p1',
  skills: [
    {type: "HTML", level: 99},
    {type: "CSS", level: 98},
    {type: "JavaScript", level: 87},
    {type: "jQuery", level: 92},
    {type: "BootStrap", level: 90},
    {type: "Photoshop", level: 100},
    {type: "Angular.js", level: 16},
    {type: "React.js", level: 25},
    {type: "PHP", level: 36},
    {type: "Ruby", level: 11}
  ]
},
{ title: 'page2',
  id: 'p2',
  skills: [
    {type: "HTML", level: 99},
    {type: "CSS", level: 98},
    {type: "JavaScript", level: 87},
    {type: "jQuery", level: 92},
    {type: "BootStrap", level: 90},
    {type: "Photoshop", level: 100},
    {type: "Angular.js", level: 16},
    {type: "React.js", level: 25},
    {type: "PHP", level: 36},
    {type: "Ruby", level: 11}
  ]
}
]

const skillsData = {
"head": {
  "id":"page04_skills",
  "num":"04",
  "cat":"skills",
  "url":"skills",
  "title":"инструменты_и навыки",
  "subTitle":"Services, skills and tools"
},
"pages":[
  {
    "id": "page04_01_skillset",
    "num": "1",
    "cat": "skillset",
    "title": "Skillset_Breakdown",
    "subTitle": "Основные навыки и уровень владения ими",
    "itemClass": "section skills",
    "items": [{
      "id": "01",
      "cat": "skillset",
      "title":"HTML",
      "subTitle":"HTML5 / HTML, CSS",
      "value": "90",
      "itemClass": "skills-item cx3"
    },{
      "id":"02",
      "cat":"skillset",
      "title":"JavaScript",
      "subTitle":"VanillaJS, ReactJS, GSAP",
      "value":"80",
      "itemClass":"skills-item cx3"
    },{
      "id":"03",
      "cat":"skillset",
      "title":"Graphics",
      "subTitle":"Photoshop, Illustrator",
      "value":"90",
      "itemClass":"skills-item cx3"
    },{
      "id":"04",
      "cat":"skillset",
      "title":"Motion Graphics",
      "subTitle":"After Effects, Cinema 4D",
      "value":"90",
      "itemClass":"skills-item cx3"
    }]
  },
  {
    "id": "page_04_02_my_tools",
    "num": "2",
    "cat": "apps&tools",
    "title": "Рабочие_инструменты",
    "subTitle": "Приложения и утилиты, которые я использую в работе",
    "itemClass": "section tools",
    "items": [
    {
      "id": "01",
      "cat": "skillset",
      "title":"HTML",
      "subTitle":"HTML5 / HTML, CSS",
      "value": "90",
      "itemClass": "skills-item cx3"
    },{
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

class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pages: this.props.pages,
      currentPage: 0
    }
  }  

  renderPages(pages) {
      return pages.map((page, index) => this.renderPage( page, (this.state.currentPage === index))
    );
  }
  
  renderPage(page, current) {
    return (
      <Page {...page} current={current} >{this.props.children}</Page>
    );
  }
  
  render() {
    const pages = this.renderPages(this.props.pages);
    
    return (
      <div className="pages">
        { pages }
      </div>
    );
  }
}

class Page extends React.Component {

  renderItems(items) {
    return items.map((item, index) => this.renderItem(item))
  }
  
  renderItem(item) {
    return <Item {...item} />
  }
  
  render() {
  
    const [firstWorld, ...secWorld] = this.props.title.split("_")    
    const items = this.renderItems(this.props.items);

    return (
      <div className={this.props.itemClass}>
        <Title {...this.props}/>
        {items}
      </div>
    );
  }
}


const Item = (props) => (
  <div className={props.itemClass}>
    <div className="item-num">
      <span className="num__current">{props.id}</span>
      <span className="num__total">04</span>
    </div>
    <div className="item-cat">{props.cat}</div>
    <h3>{props.title}</h3>
    <p>{props.subTitle}</p>
  </div>
)


class SkillBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  getSkills() {
    return this.state.data[0].skills;
  }
  
  componentDidMount() {
    setTimeout(function() {
      document.getElementById('root').classList.toggle('load')
    }, 6000);
  }
  
  setShade(input) {
    return 100 / (input.index + 3.5) ;
  }
  
  render() {

    return(
      
      <div id="app" className="container collapsed">
        <ul className="skills">
          {this.getSkills().map((skill, index) => 
            <li key={skill.type} style={ {
                                    width: skill.level + '%',
                                    backgroundColor: 'hsl(' + this.props.hue + ', ' + this.props.saturation + '%, ' + this.setShade({ index }) + '%)'
                                  } }>
              <p>{skill.type}<span>{skill.level}</span></p>
            </li>
          )}
        </ul>
      </div>
    )
  }
}


const Skills = (props) => (
  <PageLayout {...skillsData.head}>
    <SkillBars hue="100" saturation="40" />
    <Pages {...skillsData} />
  </PageLayout>
)
export default Skills;

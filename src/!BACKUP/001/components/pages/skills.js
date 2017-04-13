import React from 'react';
import PageLayout from '../page-layout';
import Items from '../views/items';
import Page from '../views/page';

const skillsData = {
	head: {
    "id": "p40",
    "num": "04",
    "cat": "skills",
    "title": "инструменты_и навыки",
    "subTitle": "Services, skills and tools",
  },
  items: [
		{
			"id": "p41skill01",
			"cat": "skillset",
			"title":'HTML',
			"subTitle":'HTML5 / HTML, CSS',
			itemClass: 'page-skills full',
      items: [
        {
          "id": "01",
          "cat": "skillset",
          "title":'HTML',
          "subTitle":'HTML5 / HTML, CSS',
          "value": "90",
          itemClass: 'skills-item cx3'
        },
        {
          id: '02',
          cat:'skillset',
          title:'JavaScript',
          subTitle:'VanillaJS, ReactJS, GSAP',
          "value": "80",
          itemClass: 'skills-item cx3'
        },
        {
          id: '03',
          cat:'skillset',
          title:'Graphics',
          subTitle:'Photoshop, Illustrator',
          "value": "90",
          itemClass: 'skills-item cx3'
        },
        {
          id:'04',
          cat:'skillset',
          title:'Motion Graphics',
          subTitle:'75%',
          "value": "90",
          itemClass: 'skills-item cx3'
        }
      ]
		},
		{
			id: 'p41skill02',
			cat:'skillset',
			title:'Page 2',
			subTitle:'VanillaJS, ReactJS, GSAP',
			"value": "80",
			itemClass: 'page-tools',
      items: [
        {
          "id": "p41skill01",
          "cat": "skillset",
          "title":'HTML',
          "subTitle":'HTML5 / HTML, CSS',
          "value": "90",
          itemClass: 'item'
        },
        {
          id: 'p41skill02',
          cat:'skillset',
          title:'JavaScript',
          subTitle:'VanillaJS, ReactJS, GSAP',
          "value": "80",
          itemClass: 'item'
        }
      ]
		}

  ]
}


/*
const Skills = (props) => (

  <Layout  {...data.head}>
    <h2>{data.skills[0].title}</h2>
      <Slider />
      <Test />
  </Layout>

)
*/
class Skills extends React.Component {
  constructor() {
    super();    
    this.state = {
      data: {}
    }
  }
  
  componentWillMount() {
    this.setState({
      data: skillsData.items[0]
    });
  }
  
  render() {
    let data = skillsData;
    return (
      <PageLayout {...data.head} className="scroll">
        <h2>SkillSet</h2>
        <Items data={this.state.data} className="grid bordered" />
      </PageLayout>
    )
  }
}

export default Skills;

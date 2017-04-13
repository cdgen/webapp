import React from 'react';
import Layout from '../layout';
import SlideShow from '../slideshow';
import Page from '../page';

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

  render() {
    let data = skillsData;
    let page1 = data.items[0];
    let page2 = data.items[1]
    return (
      <Layout  {...data.head}>      
        <Page {...page1} className="page--1 hx3"/>   
        <Page {...page2} className="page--2 hx3"/>   
      </Layout>
    )
  }
}

export default Skills;

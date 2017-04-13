import React from 'react';
import PageLayout from '../page-layout';
import Cards from '../views/cards';

const aboutData = {
	head: {
    title: "Немного_о себе",
    subTitle: "Web-дизайнер и FrontEnd-разработчик",
    id: "2", num: "02", cat: "about" 
  },
  items: [
    {
      key: 0, 
      title: "Стремление к совершенству", 
      subTitle: "внимание к деталям и постоянное саморазвитие", 
      num: "01", cat: "inspire", img:"/img/slide__01.jpg", cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx12 hx6 bg"
    },{
      key: 1, 
      title: "Креативный подход", 
      subTitle: "Свежие и неповторимые идеи в каждом проекте", 
      num: "02", cat: "creative", img:"/img/slide__02.jpg",  cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx6 hx6 bMain"
    },{
      key: 2, 
      title: "Cовременные технологии", 
      subTitle: "Максимум производительности, минимум кода", 
      num: "03", cat: "technology", img:"/img/slide__03.jpg", cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx6 hx6 bLight"
    },{
      key: 3,
      title: "Внимание к деталям",
      subTitle: "Web-дизайнер и FrontEnd-разработчик",
      num: "04", cat: "quality", img:"/img/slide_04.jpg", cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx6 hx6 imgBg"
    }
  ]
}

let data = aboutData;

const About = (props) => (
  <PageLayout  {...data.head}>
    <Cards id="slider_about" data={data} className="page--content slider" />
  </PageLayout>
)

export default About;

import React from 'react';
import PageLayout from '../page-layout';
import SlideShow from '../views/slideshow';

const homeData = {
	head: {
    title: "Creative design_generator",
    subTitle: "Web-дизайнер и FrontEnd-разработчик",
    num: "01", cat: "intro", id:"1", next:"about"
  },
  loadTime: 2000,
  items: [
    {
      key: 1, 
      title: "Креативный подход", 
      subTitle: "Свежие и неповторимые идеи в каждом проекте", 
      num: "01", cat: "creative", img:"/img/slide__02.jpg",  cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx6 hx6 bMain"
    },{
      key: 2, 
      title: "Cовременные технологии", 
      subTitle: "Максимум производительности, минимум кода", 
      num: "02", cat: "technology", img:"/img/slide__03.jpg", cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx6 hx6 bLight"
    },{
      key: 3,
      title: "Стремление к совершенству", 
      subTitle: "внимание к деталям и постоянное саморазвитие",
      num: "03", cat: "quality", img:"/img/slide_04.jpg", cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx6 hx6 imgBg"
    }
  ]
}

class Home extends React.Component {
  render() {
    let data = homeData;
    return (
      <PageLayout  {...data.head}>
         <SlideShow {...data} />
      </PageLayout>
    )
  }
}
export default Home;
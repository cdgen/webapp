import React from 'react';
import PageLayout from '../page-layout';
import WorkList from '../views/acc';

const worksData = {
	head: {
    title: "Проекты и_эксперименты",
    subTitle: "Богатый опыт работы в проектах разного уровня сложности",
    num: "03", cat: "works", id:"3"
  },
  items: [
    {
      key: 0, 
      title: "Стремление к совершенству", 
      subTitle: "внимание к деталям и постоянное саморазвитие", 
      num: "01", cat: "inspire", img:"/img/slide__01.jpg", cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx12 hx6 bg"
    }
  ]
}

let data = worksData;

const Works = (props) => (
  <PageLayout {...data.head}>
    <WorkList />
  </PageLayout>
)

export default Works;
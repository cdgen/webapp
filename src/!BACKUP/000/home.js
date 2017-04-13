import React, { Component } from 'react';

import ShareBtn from './icons';
import ShareBtn2 from './icons';

var data = {
	title: "Creative design  generator",
	subTitle: "Web-дизайнер и FrontEnd-разработчик",
	num: "01",
  cat: "intro",
  slide: [
    {
      title: "Slide  n-01",
      subTitle: "Web-дизайнер и FrontEnd-разработчик",
      num: "01"
    },
    {
      title: "Slide  n-02",
      subTitle: "Web-дизайнер и FrontEnd-разработчик",
      num: "02"
    }
  ]
}

const Slide = (elem) => {
   let [firstWorld, ...secWorld]  = elem.title .split("  ");
   let title = <h2><span>{firstWorld}</span><span>{secWorld}</span></h2>;
   let subTitle = <h4>{elem.subTitle}</h4>;
   let num = <div className="slide-num">{elem.num}</div>
   let cat = <div className="slide-cat">{elem.cat}</div>
   return (
     <div className={elem.cls+" "+(elem.css ? elem.css:"")}>
      <div className="slide--title">{num}{cat}{title}{subTitle}</div>
      <div className="slide--bg"><img src={elem.img} alt="" /></div>
     </div>
   )
};

// Carousel
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sl: 0,
      slide1: {title: "Стремление  к совершенству", subTitle: "внимание к деталям и постоянное саморазвитие", num: "01", cat: "inspire", img:"/img/creative.jpg", css:"cBlack"},
      slide2: {title: "Креативный  подход", subTitle: "Свежие и неповторимые идеи в каждом проекте", num: "02", cat: "creative", img:"/img/detail.jpg", css:"cBlack"},
      slide3: {title: "современные  технологии", subTitle: "Максимум производительности, минимум кода", num: "03", cat: "technology", img:"/img/technology.jpg", css:"cWhite"},
      slide4: {title: "Slide  n-04", subTitle: "Web-дизайнер и FrontEnd-разработчик", num: "04", cat: "quality", img:"/img/4.jpg"},
    }
  }
  
  handleClick = (event) => {
		let slN = event.target.id.replace('image-','');
		this.setState({
			sl: slN
		})
	}

	render() {
		return (
			<div id="slider" className="page--content slides" data-image={this.state.sl}>        
				<div className="slider--wrapper">
					<Slide {...this.state.slide1} cls={this.state.sl == 0 ? "slide active":"slide"} />
          <Slide {...this.state.slide2} cls={this.state.sl == 1 ? "slide active":"slide"} />
					<Slide {...this.state.slide3} cls={this.state.sl == 2 ? "slide active":"slide"} />
          <Slide {...this.state.slide4} cls={this.state.sl == 3 ? "slide active":"slide"} />
				</div>
        
				<div className="slider--nav">
          <div className="num"><span className="current">{'0'+(Number(this.state.sl)+1)}</span><span className="total">04</span></div>
          <div onClick={this.handleClick} id={this.state.sl > 0 ? 'image-'+(Number(this.state.sl)-1):'image-3'} className="slnav btn--prev"></div>
          <div onClick={this.handleClick} id={this.state.sl < 3 ? 'image-'+(Number(this.state.sl)+1):'image-0'} className="slnav btn--next"></div>
          <div className="dots">
            <div onClick={this.handleClick} id="image-0" className={this.state.sl == 0 ? "dot active" : "dot"}></div>
            <div onClick={this.handleClick} id="image-1" className={this.state.sl == 1 ? "dot active" : "dot"}></div>
            <div onClick={this.handleClick} id="image-2" className={this.state.sl == 2 ? "dot active" : "dot"}></div>
            <div onClick={this.handleClick} id="image-3" className={this.state.sl == 3 ? "dot active" : "dot"}></div>
          </div>
				</div>
			</div>
		);
	}
}

const TitleH1 = (elem) => {
   let [firstWorld, ...secWorld]  = elem.title .split("  ");
   let title = <h1><span>{firstWorld}</span><span>{secWorld}</span></h1>;
   let subTitle = <h4>{elem.subTitle}</h4>;
   let num = <div className="page-num">{elem.num}</div>
   let cat = <div className="page-cat"><label>Category:</label>{elem.cat}</div>
   return <div id="header" className="page--title">{num}{cat}{title}{subTitle}<ShareBtn2 width={'16'} height={'16'}/></div>
};

class Home extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      data: data
    }
  }

  render() {
    return(
      <section id="home" className="page">
       <TitleH1 {...this.state.data} />       
       <Carousel />
      </section>
    );
  }
}

export default Home;
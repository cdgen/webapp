import React, { Component } from 'react';

var data = {
	title: "Немного  о себе",
	subTitle: "Web-дизайнер и FrontEnd-разработчик",
	num: "02", 
  cat: "intro"
}


const Slide = (elem) => {
   let [firstWorld, ...secWorld]  = elem.title .split("  ");
   let title = <h2><span>{firstWorld}</span><span>{secWorld}</span></h2>;
   let subTitle = <h4>{elem.subTitle}</h4>;
   let num = <div className="slide-num">{elem.num}</div>
   let cat = <div className="slide-cat">{elem.cat}</div>
   return (
     <div className={elem.cls+" "+(elem.cWrap ? elem.cWrap:"")}>
      <div className={elem.cTxt}>{num}{cat}{title}{subTitle}</div>
      <div className={elem.cBg}><div className="bg"><img src={elem.img} alt="" /></div></div>
     </div>
   )
};
// Carousel
class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sl: 0,
      slide1: {title: "Стремление  к совершенству", subTitle: "внимание к деталям и постоянное саморазвитие", num: "01", cat: "inspire", img:"/img/menu_skills.jpg", cWrap:"grid", cTxt:"cx6 hx6 bMain", cBg:"cx6 hx6"},
      slide2: {title: "Креативный  подход", subTitle: "Свежие и неповторимые идеи в каждом проекте", num: "02", cat: "creative", img:"/img/detail.jpg", cWrap:"grid", cTxt:"cx6 hx6 bMainL", cBg:"cx6 hx6"},
      slide3: {title: "современные  технологии", subTitle: "Максимум производительности, минимум кода", num: "03", cat: "technology", img:"/img/technology.jpg", cWrap:"grid", cTxt:"cx6 hx6 bMainD cWhite col jc-cnt", cBg:"cx6 hx6"},
      slide4: {title: "Slide  n-04", subTitle: "Web-дизайнер и FrontEnd-разработчик", num: "04", cat: "quality", img:"/img/4.jpg", cWrap:"grid", cTxt:"cx6 hx6", cBg:"cx6 hx6"}
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
			<div id="slider" className="page--content slide" data-image={this.state.sl}>        
				<div id="slideWrapper" className="wrapper">
					<Slide {...this.state.slide1} cls={this.state.sl == 0 ? "slide active":"slide"} />
          <Slide {...this.state.slide2} cls={this.state.sl == 1 ? "slide active":"slide"} />
					<Slide {...this.state.slide3} cls={this.state.sl == 2 ? "slide active":"slide"} />
          <Slide {...this.state.slide4} cls={this.state.sl == 3 ? "slide active":"slide"} />
				</div>
        
				<div className="slider--nav">
          <div onClick={this.handleClick} id={this.state.sl > 0 ? 'image-'+(Number(this.state.sl)-1):'image-3'} className="btn--prev"></div>
					<div className="num"><span className="current">{'0'+(Number(this.state.sl)+1)}</span><span className="total">04</span></div>
          <div onClick={this.handleClick} id={this.state.sl < 3 ? 'image-'+(Number(this.state.sl)+1):'image-0'} className="btn--next"></div>
          <div className="dots">
            <div onClick={this.handleClick} id="image-0" className={this.state.sl == 0 ? "Dot active" : "Dot"}></div>
            <div onClick={this.handleClick} id="image-1" className={this.state.sl == 1 ? "Dot active" : "Dot"}></div>
            <div onClick={this.handleClick} id="image-2" className={this.state.sl == 2 ? "Dot active" : "Dot"}></div>
            <div onClick={this.handleClick} id="image-3" className={this.state.sl == 3 ? "Dot active" : "Dot"}></div>
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
   let cat = <div className="page-cat">{elem.cat}</div>   
   return <div id="header" className="page--title">{num}{cat}{title}{subTitle}</div>
};

class About extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      data: data
    }
  }

  render() {
    return(
      <section id="about" className="page">
       <TitleH1 {...this.state.data} />
       <Carousel />
      </section>
    );
  }
}

export default About;



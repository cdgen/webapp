import React from 'react';
import PageLayout from '../page-layout';
import Title from "../helpers"

const aboutData = {
"head": {
    "title": "Немного_о себе",
    "subTitle": "Web-дизайнер и FrontEnd-разработчик",
    "id": "2",
    "num": "02", 
    "cat": "about",
    "url": "about"
  },
"sections": [
  {
    "key": 0,
    "num": "1",
    "cat": "profile",
    "title": "Hello_World", 
    "subTitle": "Приветствую. Меня зовут Александр Киртоакэ. Графический дизайнер и Frontend-разработчик с богатым опытом работы в проектах разного уровня сложности", 
    "img": "/img/slide__01.jpg",
    "itemClass": "slide-item",
    "contentClass": "item-content",
    "bgClass": "item-bg",
    "items": [
      {
        "id": "01",
        "cat": "Design",
        "title": "Графический_дизайн",
        "subTitle": "HTML5 / HTML, CSS",
        "value": "90",
        "itemClass": "skills-item cx3",
        "iconClass":"icon-html5",
        "bgClass":"bMain"
      },
      {
        "id":"02",
        "cat":"philosophy",
        "title":"JavaScript",
        "subTitle":"VanillaJS, ReactJS, GSAP",
        "value":"80",
        "itemClass":"skills-item cx3",
        "iconClass":"icon-social-javascript-outline",
        "bgClass":"bMain"
      }
    ]
  },
  {
    "key": 1,
    "num": "2",
    "cat": "philosophy",
    "title": "Творческий_процесс", 
    "subTitle": "Свежие и неповторимые идеи в каждом проекте", 
    "img": "/img/slide__02.jpg",
    "itemClass": "slide-item",
    "contentClass": "item-content",
    "bgClass": "item-bg",
    "items": [
      {
        "num": "01",
        "cat": "quality",
        "title": "Стремление к совершенству", 
        "subTitle": "внимание к деталям и постоянное саморазвитие", 
        "value": "90",
        "itemClass": "card cx4 bDark cWhite",
        "iconClass":"icon-pulse x3",
        "bgClass":"bMain"
      },
      {
        "num":"02",
        "cat":"creative",
        "title": "Креативный подход",
        "subTitle": "Свежие и неповторимые идеи в каждом проекте", 
        "value":"80",
        "itemClass":"card cx4 bMain cWhite",
        "iconClass":"icon-lightbulb-outline x3",
        "bgClass":"bMain"
      },
      {
        "num": "3",
        "cat": "technology",
        "title": "Cовременные технологии",
        "subTitle": "Свежие и неповторимые идеи в каждом проекте", 
        "value": "80",
        "itemClass":"card cx4 bWhite",
        "iconClass":"icon-nodejs",
        "bgClass":"bMain"
      }
    ]
  },
  {
    "key": 2,    
    "id": "page02_03_skillset",
    "num": "03",
    "cat": "skillset",
    "title": "Skillset_Breakdown",
    "subTitle": "Основные навыки и уровень владения ими",
    "itemClass": "slide-item",
    "contentClass": "item-content",
    "bgClass": "item-bg",
    "img": "/img/slide__03.jpg",
    "items": [{
      "id": "01",
      "cat": "skillset",
      "title":"HTML",
      "subTitle":"HTML5 / HTML, CSS",
      "value": "90",
      "itemClass": "skills-item cx3",
      "iconClass":"icon-html5",
      "bgClass":"bMain"
    },{
      "id":"02",
      "cat":"skillset",
      "title":"JavaScript",
      "subTitle":"VanillaJS, ReactJS, GSAP",
      "value":"80",
      "itemClass":"skills-item cx3",
      "iconClass":"icon-social-javascript-outline"
    },{
      "id":"03",
      "cat":"skillset",
      "title":"Graphics",
      "subTitle":"Photoshop, Illustrator",
      "value":"90",
      "itemClass":"skills-item cx3",
      "iconClass":"icon-social-javascript-outline"
    },{
      "id":"04",
      "cat":"skillset",
      "title":"Motion Graphics",
      "subTitle":"After Effects, Cinema 4D",
      "value":"90",
      "itemClass":"skills-item cx3",
      "iconClass":"icon-social-javascript-outline"
    }]
  }
  ]
}

let data = aboutData;

const About = (props) => (
  <PageLayout  {...data.head}>
    <Slider content={data.sections} className="slider" />
  </PageLayout>
)

// 
const CSS_PREFIX = 'xslider';
const getClassName = name => `${CSS_PREFIX}-${name}`;

const classRoot = CSS_PREFIX;
const classWrap = getClassName('wrapper');
const classItem = getClassName('item');
const classDots = getClassName('dots');

const SLIDE_ANM_TIME = 1400;
const SLIDE_ANM_DELAY = 800;
const SLIDE_ANM_EASING = "cubic-bezier(0.6, 0, 0.01, 0.99) ";
const SLIDE_ANM_TRANSITION = SLIDE_ANM_TIME + "ms " + SLIDE_ANM_EASING +  SLIDE_ANM_DELAY + "ms";
const SLIDE_ANM_TOTAL = SLIDE_ANM_TIME + SLIDE_ANM_DELAY +'ms';

class Slider extends React.Component {
  constructor(props) {  
    super(props);
    
    // Slider actions bind
    this.prevSlide = this.prevSlide.bind(this);
    this.nextSlide = this.nextSlide.bind(this);
    this.slideTo = this.slideTo.bind(this);
    
    this.state = {
      slides: this.props.content,
      slidesCount: this.props.content.length,
      slideActive: 0
    }
  }
  
  propTypes: {
    slidesCount: React.PropTypes.number,
    slideActive: React.PropTypes.number,
  }

  componentDidMount() {
    this.state = {
      slides: this.props.content,
      slidesCount: this.props.content.length,
      slideActive: 0
    }
  }
  
  // Обработчик для навигации по слайдам. Используется в компоненте Dot, принимая в качестве аргумента атрибут 'data-target'
  // 1. Получаем атрибут 'data-target' и помещаем его в переменную 'targetTo'. Метод Number() преобразует значение переменной в число.
  // 2. Устанавливаем состояние 'slideActive' равным 'targetTo'.  
	slideTo(e) {
		e.preventDefault();
    // Step 1
		let targetTo = Number(e.currentTarget.getAttribute("data-target"));
    // Step 2
    this.setState({
      slideActive: targetTo
    });
	}
  
  // Обработчик для перехода к предыдущему слайду. Используется в качестве 'onClick' для кнопки 'btn--prev'
  // 1. Задаем переменнную prevIndex равную значению состояние 'slideActive' - '1'. Если полученное значение отрицательное задаем prevIndex равным индексу последнего слайда
  // 2. Устанавливаем состояние 'slideActive' равным 'prevIndex'.
  prevSlide() {
    // Step 1
    let prevIndex = this.state.slideActive - 1 < 0 ? this.state.slidesCount - 1 : this.state.slideActive - 1;
    // Step 2
    this.setState({
      slideActive: prevIndex
    });
  }
  
  // Обработчик для перехода к следующему слайду. Используется в качестве 'onClick' для кнопки 'btn--next'
  // 1. Задаем переменнную nextIndex равную значению состояние 'slideActive' + '1'. Если полученное значение больще индекса последнего слайда задаем nextIndex равным индексу первого слайда
  // 2. Устанавливаем состояние 'slideActive' равным 'nextIndex'.
  nextSlide() {
    let nextIndex = this.state.slideActive + 1 < this.state.slidesCount ? this.state.slideActive + 1 : 0;
    this.setState({
      slideActive: nextIndex
    });
  }
  
  getSlideWidth() {
    let slideWidth = 100/this.state.slidesCount+'%';
    return slideWidth
  }
  
  isActive(value){
    if(this.state.slideActive === value){
      return true;
    }
  }
  
  render() {

    let total = this.state.slidesCount;

    const SN = this.state.slidesCount;
    const IDX = this.state.slideActive;
    const SW = SN*100+'%';
    const MOVEX = -IDX*100/SN+"%";

    const styleWrapper = {
      width: SW,
      transform: ("translate3d("+MOVEX+",0,0)")
    }
    
    const slides = this.state.slides.map((item, index) =>  
      <Content {...item} active={this.isActive(index)} count={index} total={total} />
    )
    
    const dots = this.state.slides.map((item, index) => {
        return (<Dot {...item} active={this.isActive(index)} target={index} onClick={this.slideTo} total={total}></Dot>  )
      }
    )

    return (
      <div className={classRoot}>
        <div className={classWrap} style={styleWrapper}>
          { slides }
        </div>
        <div className={classDots}>
          <div className="btn--prev" onClick={this.prevSlide}></div>
          { dots }          
          <div className="btn--next" onClick={this.nextSlide}></div>
        </div>
      </div>
    );
  }
}


class Dot extends React.Component {
  render() {
    
    return (
      <div className={"dot-item " + (this.props.active ? 'active':'' )} data-target={this.props.target} onClick={this.props.onClick}>
        <span className="dot-num">{this.props.num}</span>
        <span className="dot-label">{this.props.cat}</span>
      </div>
    );
  }
}

class Content extends React.Component {
   renderItems(items) {
    return items.map((item, index) => this.renderItem(item, index))
  }
  
  renderItem(item, index) {
    let style = {transitionDelay: (index+1) *500 + 'ms'}
    return (
      <Item key={index} {...item} style={style}/>
    )
  }
  
  render() {
  
    const itemStyles = {
      width: 100 / this.props.total + '%',
      left: this.props.count * ( 100 / this.props.total ) + '%'
    }
    
    
    const	styleBg = {
      transform: "translate3d(-"+(this.props.active ? "0": "50%") + ",0,0)",
      backgroundImage: 'url(' + this.props.img + ')'
    }
    

    const items = this.renderItems(this.props.items);

    return (
      <div className={this.props.itemClass + (this.props.active ? ' active':'' )} style={itemStyles}>
        <div className={this.props.contentClass + (this.props.active ? ' active': '')}>
          <Title {...this.props} />
          {items}
        </div>
        <div className={this.props.bgClass} style={styleBg}></div>
      </div>
    );
  }
}

const Item = (props) => (
  <div className={props.itemClass}>
    <div className="item-num">
      <span className="num__current">{props.num}</span>
      <span className="num__total">04</span>
    </div>
    <div className="item-cat">{props.cat}</div>
    <i className={props.iconClass}></i>
    <div className="item-value">{props.value}</div>
    <h3>{props.title}</h3>
    <p>{props.subTitle}</p>
    <div className={props.bgClass} style={props.style} />
  </div>
)

export default About;

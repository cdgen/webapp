import React from 'react';
import PageLayout from '../page-layout';

const aboutData = {
	head: {
    title: "Немного_о себе",
    subTitle: "Web-дизайнер и FrontEnd-разработчик",
    id: "2", num: "02", cat: "about" 
  },
  content: [
    {
      key: 0, 
      title: "Стремление к совершенству", 
      subTitle: "внимание к деталям и постоянное саморазвитие", 
      num: "01", cat: "inspire", img:"/img/slide__01.jpg", cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx12 hx6 bg",
      items: [
        {
          key: 1, 
          title: "1 подход", 
          subTitle: "Свежие и неповторимые идеи в каждом проекте", 
          num: "001", cat: "creative", img:"/img/slide__02.jpg",  cls:"slide", clsTitle:"cx6 hx6", clsBg:"cx6 hx6 bMain"
        }
      ]
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

const SLIDE_ANM_TIME = 1400;
const SLIDE_ANM_DELAY = 800;
const SLIDE_ANM_EASING = "cubic-bezier(0.6, 0, 0.01, 0.99) ";
const SLIDE_ANM_TRANSITION = SLIDE_ANM_TIME + "ms " + SLIDE_ANM_EASING +  SLIDE_ANM_DELAY + "ms";
const SLIDE_ANM_TOTAL = SLIDE_ANM_TIME + SLIDE_ANM_DELAY +'ms';

const About = (props) => (
  <PageLayout  {...data.head}>      
    <Slider content={data.content} className="slider" />
  </PageLayout>
)


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
    let lastSlide = this.state.slideActive;
		let targetTo = Number(e.currentTarget.getAttribute("data-target"));
    // Step 2
    this.setState({
      lastSlide: lastSlide,
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

    //const dots = this.renderDots(this.state.slides);
    
    const SN = this.state.slidesCount;
    const IDX = this.state.slideActive;
    const SH = '100%';
    const SW = SN*100+'%';
    const IW = 100/SN+'%';
    const MOVEX = IDX* -25+"%";

    const styles = {
      width: SW,
      height: SH,
      transform: ("translate3d("+MOVEX+",0,0)"),
      transition: SLIDE_ANM_TRANSITION
    }
    
    const slides = this.state.slides.map((item, index) =>  
      <SlideItem {...item} active={this.isActive(index)} count={index} total={total} />
    )
    
    const dots = this.state.slides.map((item, index) => {
        return (<Dot {...item} active={this.isActive(index)} target={index} onClick={this.slideTo} total={total}></Dot>  )
      }
    )

    return (
      <div className="xslider">
        <div className="xslider-wrap" style={styles}>
          { slides }
        </div>
        <div className="xslider-dots" >
          { dots }
        </div>
        <div className="btn--prev" onClick={this.prevSlide}></div>
        <div className="btn--next" onClick={this.nextSlide}></div>
      </div>
    );
  }
}

class SlideItem extends React.Component {


  render() {  
    const itemStyles = {
      position: 'absolute',
      width: 100 / this.props.total + '%',
      height: '100%',
      top: 0,
      left: this.props.count * ( 100 / this.props.total ) + '%'
    }
    
    
    const	styleBg = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundImage: 'url(' + this.props.img + ')',
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
    
    return (
      <div className={"item " + (this.props.active ? 'active':'' )} style={itemStyles}>
        <Content {...this.props}/>
        <div className="item-bg" style={styleBg}></div>
      </div>
    );
  }
}

class Dot extends React.Component {
  render() {
    const styles = {
      height: 100 / this.props.total + '%',
      backgroundColor:  (this.props.active ? '#000':'' ),
      color: (this.props.active ? '#fff':'' ),
    }
    
    return (
      <div className={"dot-item " + (this.props.active ? 'active':'' )} data-target={this.props.target} onClick={this.props.onClick} style={styles}>
        <span className="dot-num">{this.props.num}</span>
        <span className="dot-label">{this.props.cat}</span>
      </div>
    );
  }
}


class Content extends React.Component {
 
  render() { 
    let [firstWorld, ...secWorld] = this.props.title.split(" ")
    
    const styles = {
      position: 'absolute',
      top: '25%',
      left: '25%',
      width: '50%',
      height: '50%',
      transform: "translate3d(0,"+ (this.props.active ? "0": "1em") + ",0)",
      transition: "transform 0.6s ease-out, opacity 0.6s",
      transitionDelay: this.props.active ? "2200ms, 2200ms": "0s, 0s",
      opacity: this.props.active ? "1": "0",
      zIndex: 100
    }
    
    return (
        <div className={this.props.active ? "item-content active": "item-content"} style={styles}>
          <div className="title-num">
            <span className="num__current">{this.props.num}</span>
            <span className="num__total">04</span>
          </div>
          <div className="title-cat">
            <span className="cat__label">SN</span>
            <span className="cat__value">{this.props.cat}</span>
          </div>
          <div className="title-text">
            <h2><span>{firstWorld}</span><span>{secWorld}</span></h2>
            <p>{this.props.subTitle}</p>
            <div className="line"></div>
          </div>
        </div>
    );
  }
}

export default About;

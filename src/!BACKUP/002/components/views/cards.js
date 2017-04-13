import React, { Component } from 'react';

//Temporarily store data here
const PostsData = [
  {
    "category": "News",
    "title": "CNN Acquire BEME",
    "text": "CNN purchased Casey Neistat's Beme app for $25million.",
    "image": "https://source.unsplash.com/user/erondu/600x400"
  },
  {
    "category": "Travel",
    "title": "Nomad Lifestyle",
    "text": "Learn our tips and tricks on living a nomadic lifestyle",
    "image": "https://source.unsplash.com/user/_vickyreyes/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  },
  {
    "category": "Development",
    "title": "React and the WP-API",
    "text": "The first ever decoupled starter theme for React & the WP-API",
    "image": "https://source.unsplash.com/user/ilyapavlov/600x400"
  }
]


// Start App

class Cards extends Component { 
  constructor(props) {
    super(props);
    
    this.state = {
      posts: {}
    }
  }
  componentWillMount() {
    this.setState({
      posts: PostsData,
      modalOpen: false
    });
  }
 
  handleToggle() {
    this.setState({
      modalOpen:!this.state.modalOpen
    })
  }
  
  render() {
    return ( 
      <div className="card-grid" onClick={this.handleToggle.bind(this)} className={this.state.modalOpen ? "card-grid open" : "card-grid"}>
        { Object .keys(this.state.posts).map(key => <Card key={key} index={key} details={this.state.posts[key]}/>)}
      </div>
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <div className="btn btn-readmore">
        <i className="icon-ios-information"></i> Подробнее
      </div>
    )
  }
}


class CardHeader extends React.Component {
  render() {
    const { image, category } = this.props;
    var style = { 
        backgroundImage: 'url(' + image + ')',
    };
    return (
      <div style={style} className="card-bg"></div>
    )
  }
}

class CardLink extends React.Component {
  render() {
    return (
      <div className="card-caption">
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
        <Button />
      </div>
    )
  }
}
class CardBody extends React.Component {
  render() {
    return (
      <div className="card-content">
        <h2>{this.props.title}</h2>
        <p>{this.props.text}</p>
        <Button />
      </div>
    )
  }
}
class Card extends React.Component {
  constructor() {
    super();    
    this.state = {
      open: true
    }
  }
  componentWillMount() {
    this.setState({
      open: false
    });
  }
 
  handleToggle() {
    this.setState({
      open: !this.state.open
    })
  }
  render() {
    return (
      <article className="card" onClick={this.handleToggle.bind(this)} className={this.state.open ? "card active" : "card"}>
        <CardHeader category={this.props.details.category} image={this.props.details.image}/>
        <CardLink title={this.props.details.title} text={this.props.details.text}/>
        <CardBody title={this.props.details.title} text={this.props.details.text}/>
      </article>
    )
  }
}

export default Cards;


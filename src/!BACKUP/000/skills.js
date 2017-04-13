import React from 'react';

class SkillBars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {type: "HTML", level: 95},
        {type: "CSS", level: 95},
        {type: "JavaScript", level: 80},
        {type: "jQuery", level: 85},
        {type: "Photoshop", level: 90},
        {type: "React.js", level: 70}
      ]
    };       
  }

  getSkills() {
    return this.state.skills;
  }
  
  componentDidMount() {
    setTimeout(function() {
      document.getElementById('app').classList.remove('collapsed')
    }, 1000);
  }
  
  setShade(input) {
    return 100 / (input.index + .5) ;
  }
  
  render() {

    return(
      <div id="skillSet" className="cx6 hx6">
        <h2>Skill</h2>
        <ul className="skills">
          {this.getSkills().map((skill, index) => 
            <li key={skill.type} style={{
                                    width: skill.level + '%',
                                    backgroundColor: 'hsl(' + this.props.hue + ', ' + this.props.saturation + '%, ' + this.setShade({ index }) + '%)'
                                  }}>
              <div className="skill_item">
                <h3>{skill.type}</h3>
                <span className="num">{skill.level+"%"}</span>
              </div>
            </li>
          )}
        </ul>
      </div>
    )
  }
}


class Skills extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>Skills</h1>
        <SkillBars hue="0" saturation="0" />
      </div>
    )
  }
}

export default Skills;

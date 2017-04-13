import React from 'react';

const Work = React.createClass({
  render: function() {
    return (<h1>Work for workId: {this.props.params.workId}</h1>);
  }
});

export default Work;
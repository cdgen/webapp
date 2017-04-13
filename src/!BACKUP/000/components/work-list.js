import React from 'react';
import { Link } from 'react-router';

const UserList = React.createClass({
  render: function() {
    return (
      <ul className="user-list">
        <li><Link to="works/2">Michael</Link></li>
        <li><Link to="works/1">Ryan</Link></li>
        <li><Link to="works/3">Dan</Link></li>
        <li><Link to="works/4">Matt</Link></li>
        <li><Link to="works/5">Tobias</Link></li>
        <li><Link to="works/6">Sebastian</Link></li>
      </ul>
    );
  }
});

export default UserList;

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
      <div>
        <h1>KillerNews.net</h1>
        {this.props.children}
        <Link to="archives">archives</Link>,
        <Link to="settings">settings</Link>
      </div>
    );
  }
}
 
export default Layout;
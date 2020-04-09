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
        <Link to="archives" class="btn btn-danger">archives</Link>
        <Link to="settings" class="btn btn-success">settings</Link>
      </div>
    );
  }
}
 
export default Layout;
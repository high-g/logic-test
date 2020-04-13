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
        <Link to="archives" class="btn btn-danger">archives</Link>
        <Link to="settings" class="btn btn-success">settings</Link>
        {this.props.children}
      </div>
    );
  }
}
 
export default Layout;
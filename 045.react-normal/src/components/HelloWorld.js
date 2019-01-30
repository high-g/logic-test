import React, { Component } from 'react';
import HelloFunctional from './HelloFunctional'

class HelloWorld extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      flg: false,
      value1: 'foo',
      value2: ['bar', 'baz']
    }
    this.handleClick = this.handleClick.bind(this)
    this.flgChange = this.flgChange.bind(this)
  }

  handleClick() {
    console.log(this.state.value1)
  }

  flgChange() {
    this.setState({flg: !this.state.flg})
    this.setState({value1: this.state.flg ? 'foo' : 'bar'})
  }

  render() {
    return (
      <div>
        <h1>HelloWorld</h1>
        <div onClick={this.handleClick}>let's click</div>
        <div onClick={this.flgChange}>let's click2</div>
        <HelloFunctional data={this.state.value1} />
        <HelloFunctional data={String(this.state.flg)} />
      </div>
    );
  }
}

export default HelloWorld
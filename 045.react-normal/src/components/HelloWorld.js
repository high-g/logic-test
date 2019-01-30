import React, { Component } from 'react';
import HelloFunctional from './HelloFunctional'

class HelloWorld extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      flg: false,
      value1: 'foo',
      value2: ['bar', 'baz'],
      name: 'checkだよ'
    }
    this.handleClick = this.handleClick.bind(this)
    this.flgChange = this.flgChange.bind(this)
  }

  handleClick() {
    console.log(this.state.value1)
  }

  handleChange(e) {
    const title = e.target.value
    this.setState({value1: title})
  }

  flgChange() {
    this.setState({flg: !this.state.flg})
    this.setState({value1: this.state.flg ? 'foo' : 'bar'})
  }

  getNum(num) {
    return 1 + num;
  }

  render() {
    setTimeout(() => {
      this.setState({name: 'ゴリラだよ'})
    }, 1000);

    return (
      <div>
        <h1>HelloWorld</h1>
        <div onClick={this.handleClick}>let's click</div>
        <div onClick={this.flgChange}>let's click2</div>
        <b>{this.getNum(2)}</b>
        <p>{this.state.name}</p>
        <HelloFunctional data={this.state.value1} />
        <HelloFunctional data={String(this.state.flg)} />
        <input value={this.state.value1} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default HelloWorld
import React from 'react'

const name = 'testだよ'

const HelloFunctional = (props) => (
  <div>
    <h1>HelloFunctional</h1>
    <div>{name}</div>
    <div>{props.data}</div>
  </div>
)

export default HelloFunctional
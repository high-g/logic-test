import React from 'react'

const Friend = (props) => (
  <div>
    <p>Friend {props.name}</p>
    <img src={`/assets/images/${props.id}.jpg`} alt={props.name} />
  </div>
)

export default Friend
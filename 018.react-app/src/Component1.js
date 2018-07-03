import React, { Component } from 'react'

class Component1 extends Component {
    render() {
        return(
            <div>
                <p>here is component1.</p>
                <p>{this.props.value1}</p>
            </div>
        )
    }
}

export default Component1
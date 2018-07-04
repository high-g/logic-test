import React from 'react'
import ReactDOM from 'react-dom'
import Header from './js/header/Header'
import './scss/index.scss'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('app'));
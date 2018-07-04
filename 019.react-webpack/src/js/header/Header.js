import React from 'react'
import styled from 'styled-components'
import { HeaderMenu } from './_menu'

export default class Header extends React.Component {
    render () {
        return (
            <header>
                <HeaderMenu/>
            </header>
        )
    }
}

const header =  styled.div`
    font-size: 100px;
`
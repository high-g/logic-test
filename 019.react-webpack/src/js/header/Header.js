import React from 'react'
import styled from 'styled-components'
import { SubLogo } from './SubLogo'
import { SubMenu } from './SubMenu'

export default class Header extends React.Component {
    render () {
        return (
            <BaseHeader>
                <HeaderLogo><SubLogo/></HeaderLogo>
                <HeaderMenu><SubMenu/></HeaderMenu>
            </BaseHeader>
        )
    }
}

const BaseHeader = styled.header`
    max-width: 100vw;
    min-width: 70vw;
    height: 150px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const HeaderLogo = styled.div`
    margin-top:10px;
`

const HeaderMenu = styled.div`
    margin-top:20px;
`
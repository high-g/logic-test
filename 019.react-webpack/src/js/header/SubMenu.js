import React from 'react'
import styled from 'styled-components'

export const SubMenu = () => {
    const menu = [
        'vision',
        'works',
        'solution',
        'robo-lab',
        'company',
        'recruit',
        'contact'
    ]

    return(
        <ul>
            { menu.map((item, index) => <MenuLi key={index}>{item}</MenuLi>) }
        </ul>
    )
}

const MenuLi = styled.li`
    display: inline-block;
    margin-right: 10px; 
`
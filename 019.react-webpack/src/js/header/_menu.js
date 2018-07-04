import React from 'react'
import styled from 'styled-components'

const style = {
    nav: {
        color: "#f00"
    }
}

export function HeaderMenu () {
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
        <nav style={style.nav}>
            <ul>
                { menu.map((item, index) => <li key={index}>{item}</li>) }
            </ul>
        </nav>
    )
}
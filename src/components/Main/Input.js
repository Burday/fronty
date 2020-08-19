import React from 'react'
import styled from 'styled-components'
import '../css/Input.css'
const Input = () => { 

    const Input = styled.input`
    background-color: ${props => props.theme.shadow};
    color: ${props => props.theme.text}
    `
    
    return(
        <form id="form" method="get" action="https://duckduckgo.com/">
                <Input placeholder="Search on DuckDuckGo" id="search" size="40" name="q" autoComplete="off"></Input>
            </form>
    )
}

export default Input;
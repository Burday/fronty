import React from 'react'
import styled from 'styled-components'
import '../css/Input.css'
const Input = () => { 

    
    return(
        <form id="form" method="get" action="https://duckduckgo.com/">
                <input placeholder="Search on DuckDuckGo" id="search" size="40" name="q" autoComplete="off"></input>
            </form>
    )
}

export default Input;
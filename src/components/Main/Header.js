import Weather from './Weather.js'
import Input from './Input.js'
import Websites from './Websites.js'
import Greeting from './Greeting.js'
import DateTime from "./DateTime.js"

import React from 'react'

const Header = () => {
    return (
        <div className="Header-div">
        <Greeting/>
      <nav className="Header-nav">
        <DateTime/>
        <Weather/>
        <Input/>
        <Websites/>
      </nav>
    </div>
    )
}

export default Header

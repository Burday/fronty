import Weather from './Weather.js'
import Input from './Input.js'
import Websites from './Websites.js'
import Greeting from './Greeting.js'
import DateTime from "./DateTime.js"
import WebsitesStyle from "../themes/WebsitesStyle"
import InputStyle from '../themes/InputStyle'
import React from 'react'

const Header = () => {
    return (
        <div className="Header-div">
        <Greeting/>
      <nav className="Header-nav">
          <DateTime/>
          <Weather/>
          <InputStyle>
            <Input/>
          </InputStyle>
          <WebsitesStyle>
            <Websites/>
          </WebsitesStyle>
      </nav>
    </div>
    )
}

export default Header

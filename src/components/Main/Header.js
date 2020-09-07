import React from 'react';
import InputStyle from '../themes/InputStyle';
import WebsitesStyle from '../themes/WebsitesStyle';
import DateTime from './DateTime.js';
import Greeting from './Greeting.js';
import Input from './Input.js';
import Weather from './Weather.js';
import Websites from './Websites.js';

const Header = ({ greeting, greetingToggler }) => {
	return (
		<div className="Header-div">
			<Greeting greeting={greeting} greetingToggler={greetingToggler} />
			<nav className="Header-nav">
				<DateTime />
				<Weather />
				<InputStyle>
					<Input />
				</InputStyle>
				<WebsitesStyle>
					<Websites />
				</WebsitesStyle>
			</nav>
		</div>
	);
};

export default Header;

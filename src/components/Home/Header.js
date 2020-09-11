import React from 'react';
import styled from 'styled-components';
import DateTime from './DateTime.js';
import Greeting from './Greeting.js';
import Input from './Input.js';
import Weather from './Weather.js';
import Websites from './Websites.js';
const Header = ({ greeting, greetingToggler }) => {
	const Container = styled.div`
		margin: auto;
	`;
	return (
		<Container>
			<Greeting greeting={greeting} greetingToggler={greetingToggler} />
			<nav className="Header-nav">
				<DateTime />
				<Weather />
				<Input />
				<Websites />
			</nav>
		</Container>
	);
};

export default Header;
